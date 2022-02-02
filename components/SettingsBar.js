import {
  HiOutlineViewGrid,
  HiOutlineSwitchVertical,
  HiOutlineCog,
  HiOutlineTrash,
} from 'react-icons/hi'
import useCounterStore from '@/stores/useCounterStore'

const IconWrapper = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out cursor-pointer text-light-gray hover:text-gray-600 dark:hover:text-gray-300 focus:text-light-gray">
      {children}
    </div>
  )
}

const SettingBar = () => {
  const deleteAll = useCounterStore((state) => state.deleteAll)
  return (
    <div>
      <div className="relative flex items-center justify-between mb-3 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-start w-24 pl-4 md:pl-0" id="settingsBarLeft">
          {/* <IconWrapper>
            <HiOutlineViewGrid className="w-5 h-5" />
          </IconWrapper> */}
        </div>
        <div className="flex items-center justify-end w-24 pr-4 md:pr-0" id="settingsBarRight">
          {/* <IconWrapper>
            <HiOutlineSwitchVertical className="w-5 h-5" />
          </IconWrapper> */}
          <IconWrapper>
            <HiOutlineTrash className="w-5 h-5" onClick={deleteAll} />
          </IconWrapper>
          {/* <IconWrapper>
            <HiOutlineCog className="w-5 h-5" />
          </IconWrapper> */}
        </div>
      </div>
    </div>
  )
}

export default SettingBar
