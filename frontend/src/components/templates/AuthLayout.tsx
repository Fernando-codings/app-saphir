import HomeForme from "../../features/auth/components/HomeForme"

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-(--color-bg-light) dark:bg-bg-dark'>
       <HomeForme/>
    </div>
  )
}

export default AuthLayout