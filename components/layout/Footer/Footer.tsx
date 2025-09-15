export default function Footer() {
  return (
    <footer>
      <p className='flex justify-end items-center text-xs/none px-6 h-[40px]'>
        Copyright &copy; {new Date().getFullYear()} Photo Gallery
      </p>
    </footer>
  )
}
