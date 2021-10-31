import { db } from '@/lib/firebase'
import {
    onSnapshot,
    addDoc,
    collection,
    deleteDoc,
    deleteField,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
    orderBy,
    limit,
    limitToLast,
    startAt,
    startAfter,
    endAt,
    endBefore,
    serverTimestamp,
    toMillis,
} from '@firebase/firestore'

/**
 * ADD DOC WITH FIREBASE AUTO ID
 */
export const createDocWithAutoID = async (collectionName, payload) => {
    console.log('createDocWithAutoID')
    const collectionRef = collection(db, collectionName)
    const newDocRef = await addDoc(collectionRef, payload)
    console.log('The new doc ID is: ', newDocRef.id)
    return newDocRef //DocumentReference
}

/**
 * SET DOC WITH SPECIFIC ID
 * OBS setDoc is dangerous - can owerwrite whole doc
 */
export const setDocWithSpecificID = async (collectionName, payload, id) => {
    console.log('setDocWithSpecificID')
    await setDoc(doc(db, collectionName, id), payload)
}

/**
 * CREATE/UPDATE DOC WITH SPECIFIC ID WITH 'MERGE' OPTION
 * TO PREVENT OVERWRITE OF WHOLE DOC
 */
export const updateDocItem = async (collectionName, payload, id) => {
    console.log('updateDocItem')
    await setDoc(doc(db, collectionName, id), payload, { merge: true })
}

/**
 * GET SINGLE DOC BY ID
 */
export const getSingleDoc = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data())
        return docSnap
    } else {
        console.log('No such document!') // doc.data() will be undefined in this case
    }
}

/**
 * GET ALL DOCS IN A COLLECTION
 */
export const getAllDocs = async (collectionName) => {
    const docList = await getDocs(collection(db, collectionName))
    const data = []
    docList.docs.map((doc, index) => {
        console.log(doc.data())
        data.push({
            ...doc.data(),
            id: doc.id,
            // Date fields to Millis
            ...(doc.data()?.createdAt && { createdAt: doc.data()?.createdAt.toMillis() || 0 }),
            ...(doc.data()?.updatedAt && { updatedAt: doc.data()?.updatedAt.toMillis() || 0 }),
        })
    })
    console.log(data)
    return data
}

/**
 * GET MULTIPLE DOCS WITH QUERY
 */
export const getMultipleDocs = async (collectionName, queryObject, setState) => {
    let ref = collection(db, collectionName)
    const {
        where: _where,
        orderBy: _orderBy,
        limit: _limit,
        limitToLast: _limitToLast,
        endAt: _endAt,
        endBefore: _endBefore,
        startAfter: _startAfter,
        startAt: _startAt,
        listen: _listen,
        // listen = false,
        // parseDates,
        // ignoreFirestoreDocumentSnapshotField = true,
    } = queryObject
    let colRef = null

    const queries = []

    if (_where) {
        const multipleConditions = (w) => {
            return !!w && Array.isArray(w[0])
        }
        ;(multipleConditions(_where) ? _where : [_where]).forEach((w) =>
            queries.push(where(w[0], w[1], w[2])),
        )
    }

    if (_orderBy) {
        if (typeof _orderBy === 'string') {
            queries.push(_orderBy(_orderBy))
        } else if (Array.isArray(_orderBy)) {
            const multipleOrderBy = (o) => {
                return Array.isArray(o[0])
            }
            ;(multipleOrderBy(_orderBy) ? _orderBy : [_orderBy]).forEach(([order, direction]) =>
                queries.push(orderBy(order, direction)),
            )
        }
    }
    if (_limit) {
        queries.push(limit(_limit))
    } else if (_limitToLast) {
        queries.push(limitToLast(_limitToLast))
    }
    if (_startAt) {
        queries.push(startAt(_startAt))
    }
    if (_endAt) {
        queries.push(endAt(_endAt))
    }
    if (_startAfter) {
        queries.push(startAfter(_startAfter))
    }
    if (_endBefore) {
        queries.push(endBefore(_endBefore))
    }

    colRef = queries.length > 0 ? query(ref, ...queries) : ref
    const data = []

    if (_listen) {
        const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
            setState(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    exists: doc.exists,
                    // Date fields to Millis
                    ...(doc.data()?.createdAt && {
                        createdAt: doc.data()?.createdAt.toMillis() || 0,
                    }),
                    ...(doc.data()?.updatedAt && {
                        updatedAt: doc.data()?.updatedAt.toMillis() || 0,
                    }),
                })),
            )
        })
    } else {
        const dataOnce = await getDocs(colRef)
        setState(
            dataOnce.docs.map((doc, index) => ({
                ...doc.data(),
                id: doc.id,
                exists: doc.exists,
                // Date fields to Millis
                ...(doc.data()?.createdAt && { createdAt: doc.data()?.createdAt.toMillis() || 0 }),
                ...(doc.data()?.updatedAt && { updatedAt: doc.data()?.updatedAt.toMillis() || 0 }),
            })),
        )
        // console.log(data)

        return
    }
}

/**
 * DELETE DOC
 */
export const deleteItem = async (collectionName, id) => {
    console.log('Deleting doc')
    await deleteDoc(doc(db, collectionName, id))
}

/**
 * DELETE DOC KEY
 */
export const deleteDocField = async (collectionName, id, key) => {
    console.log('Deleting doc field')
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, {
        [key]: deleteField(),
    })
}

/**
 * !TODO APP
 */
const todosCollection = 'todosCollection'
const created = serverTimestamp()
/**
 * CREATE TODO
 */
export const addToDo = async (title) => {
    await addDoc(collection(db, todosCollection), {
        title,
        created,
        complete: false,
    })
}

/**
 * READ ALL TODO
 */
export const readAllToDo = async (todosCollection, setState) => {
    console.log('readAllToDo')
    const colRef = collection(db, todosCollection)
    const unsub = onSnapshot(colRef, (snapshot) =>
        setState(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))),
    )
    return unsub
}

/**
 * UPDATE TODO
 */
export const updateToDo = async (payload, id) => {
    console.log('updateToDo')
    await setDoc(doc(db, todosCollection, id), payload, { merge: true })
}

export const updateToDoSwitchComplete = async (isComplete, id) => {
    console.log('updateToDoSwitchCompleted')
    await updateDoc(doc(db, todosCollection, id), { complete: !isComplete })
}

/**
 * DELETE TODO
 */
export const deleteToDo = async (id) => {
    await deleteDoc(doc(db, todosCollection, id))
}
