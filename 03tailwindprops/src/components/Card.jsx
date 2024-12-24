/* eslint-disable react/prop-types */
function Card({ name }) {

    console.log(name)

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
            <img
                src="https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-festive-christmas-decorations-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">

                </span>
                <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
            </div>
            <p className="text-gray-300">

                {name}
            </p>
        </div>
    )
}

export default Card
