// import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/firestore'

//v9
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

//Initialize only once
export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Auth exports
export const auth = getAuth(firebaseApp)

// Firestore exports
export const db = getFirestore(firebaseApp)

// Storage exports
// export const storage = firebase.storage()
// export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED

/// Helper functions

/**
 * Gets a users/{uid} document with username
 */
export async function getUserWithUsername(username) {
    const usersRef = db.collection('users')
    const query = usersRef.where('username', '==', username).limit(1)
    const userDoc = (await query.get()).docs[0]
    return userDoc
}

/**
 * Converts a firestore document to JSON
 */
export function postToJSON(doc) {
    const data = doc.data()
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: data?.createdAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    }
}
