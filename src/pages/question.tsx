export default function Question() {
    return (
      <>
        <div className="bg-white shadow-md rounded px-6 pt-4 pb-4 mb-4">
          <div className="field mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="baslik"
            >
              Question:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="baslik"
              type="text"
              name="input1"
              placeholder="Başlık girin"
            />
          </div>
          <div className="field mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="secenek"
            >
              Answer Type:
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="secenek"
              >
                <option value='text'>Text</option>
                <option value='checkbox'>Multi Option</option>
                <option value='radio'>Single Option</option>
                <option value='textarea'>Text Area</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 11l3-3 3 3 1-1-4-4-4 4 1 1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  