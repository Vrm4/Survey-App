
export default function Home() {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <div>
            <div className='w-full md:w-96 items-center bg-[#45496A] rounded-3xl p-3.5 flex justify-between shadow-md'>
                 <h1 className='text-white text-3xl font-extrabold'>Questionnaire App</h1>
            
            </div>
            <div className='w-full md:w-96 p-3.5 gap-6 rounded-3xl my-6 shadow-2xl bg-[#45496A] py-6'>
                <h1 className='text-3xl text-white font-extrabold'>Anket 1</h1>
                <p className='text-[#7D8BAE] text-sm pt-2.5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='w-full md:w-96 p-3.5 gap-6 rounded-3xl mt-6 shadow-2xl'>
  
                <form>
                  <div className="relative z-0 w-full mb-6 group">
                      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                <div className='my-6 '>
  
                <fieldset>
                      <legend className="sr-only">Checkbox variants</legend>
  
                      <div className="flex items-center mb-4">
                          <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                      </div>
  
                      <div className="flex items-center mb-4">
                          <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
                      </div>
  
                      <div className="flex items-center mb-4">
                          <input id="checkbox-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                      </div>
  
                      <div className="flex mb-4">
                          <div className="flex items-center h-5">
                              <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          </div>
                          <div className="ml-2 text-sm">
                              <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
                              <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-400">For orders shipped from $25 in books or $29 in other categories</p>
                          </div>
                      </div>
  
                      <div className="flex items-center">
                          <input id="international-shipping-disabled" type="checkbox" value="" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" disabled />
                          <label htmlFor="international-shipping-disabled" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Eligible for international shipping (disabled)</label>
                      </div>
                    </fieldset>
  
                </div>
  
                <div className='my-6'>
  
  <fieldset>
    <legend className="sr-only">Countries</legend>
  
    <div className="flex items-center mb-4">
      <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
      <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        United States
      </label>
    </div>
  
    <div className="flex items-center mb-4">
      <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Germany
      </label>
    </div>
  
    <div className="flex items-center mb-4">
      <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="country-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Spain
      </label>
    </div>
  
    <div className="flex items-center mb-4">
      <input id="country-option-4" type="radio" name="countries" value="United Kingdom" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
      <label htmlFor="country-option-4" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        United Kingdom
      </label>
    </div>
  
    <div className="flex items-center">
      <input id="option-disabled" type="radio" name="countries" value="China" className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" disabled />
      <label htmlFor="option-disabled" className="block ml-2 text-sm font-medium text-gray-300 dark:text-gray-700">
        China (disabled)
      </label>
    </div>
  </fieldset>
  
                </div>
  
            </div>
        </div>
      </div>
    )
  }
  