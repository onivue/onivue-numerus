import { Container } from '@/components/Container'
const Footer = () => {
  return (
    <Container className="mb-4">
      <div className="text-white rounded-lg bg-amber-300">
        <div>
          <div className="py-4 footer bg-dark-gray">
            <div className="flex flex-col items-center px-8 text-xs leading-normal xl:container md:flex-row md:justify-between xl:mx-auto text-lightmedium-gray md:text-sm">
              <div className="text-center md:text-left">
                © 2022 created by{' '}
                <a href="#" target="_blank" className="underline text-lightmedium-gray ">
                  Albin Hoti
                </a>{' '}
                <a href="#" className="underline md:hidden text-lightmedium-gray ">
                  Contact
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://tallycount.app/contact"
                  className="underline text-lightmedium-gray "
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
