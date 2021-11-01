const Footer = () => {
    return (
        <div>
            <div className="py-4 footer bg-dark-gray">
                <div className="flex flex-col items-center px-8 text-xs leading-normal xl:container md:flex-row md:justify-between xl:mx-auto text-lightmedium-gray md:text-sm">
                    <div className="text-center md:text-left">
                        © 2021 Made by{' '}
                        <a
                            href="#"
                            target="_blank"
                            className="underline text-lightmedium-gray hover:text-green-400"
                        >
                            Albin Hoti
                        </a>{' '}
                        in Switzerland, CH.
                        <a
                            href="#"
                            className="underline md:hidden text-lightmedium-gray hover:text-green-400"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <a
                            href="https://tallycount.app/contact"
                            className="underline text-lightmedium-gray hover:text-green-400"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
