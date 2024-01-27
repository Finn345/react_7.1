import Background from "../assets/images/roads.jpg"

function Home () {
  return (
    <div
        style={{ backgroundImage: `url(${ Background})`}}
        className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
        >
            <div className="flex place-items-center h-screen">
                <h4 className="p-5 bg-white bg-opacity-40 rounded text-black">
                    Welcome to Cars!
                </h4>
            </div>
        </div>
  )
}
export default Home
