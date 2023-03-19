
export default function Home() {
  
  return (
    <div className='w-screen min-h-screen flex justify-center items-center relative'>
      <div>
      <div className='w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6'>
                <h1 className='text-3xl text-white font-extrabold'>Anket 1</h1>
                <p className='text-white opacity-80 text-sm pt-2.5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username" >
           Kullanıcı Adı
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Kullanıcı Adınızı Girin" />
      </div>
      <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2">
    Cinsiyet
  </label>
  <div className="mt-2">
    <label className="inline-flex items-center">
      <input type="radio" className="form-radio h-5 w-5 text-gray-600" name="gender" value="male" />
      <span className="ml-2 text-gray-700">Erkek</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="radio" className="form-radio h-5 w-5 text-gray-600" name="gender" value="female" />
      <span className="ml-2 text-gray-700">Kadın</span>
    </label>
  </div>
</div>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2">
    İlgilenilen Konular
  </label>
  <div className="mt-2">
    <label className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" name="interests[]" value="programming"/>
      <span className="ml-2 text-gray-700">Programlama</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" name="interests[]" value="music" />
      <span className="ml-2 text-gray-700">Müzik</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" name="interests[]" value="sports" />
      <span className="ml-2 text-gray-700">Spor</span>
    </label>
  </div>
</div>


<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
    Şehir
  </label>
  <div className="relative">
    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="city" name="city">
      <option value="">Seçiniz</option>
      <option value="istanbul">İstanbul</option>
      <option value="ankara">Ankara</option>
      <option value="izmir">İzmir</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
<path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"/>
</svg>
</div>

  </div>
</div>
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
    Mesajınız
  </label>
  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows={5} placeholder="Mesajınızı Buraya Yazın"></textarea>
</div>
<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Gönder
</button>

      </div>
      <div className="absolute top-5 right-5 inline-flex grid gap-2">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-md">Add</button>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded-md">Results</button>

      </div>
    </div>
  )
}
