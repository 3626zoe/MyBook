<<<<<<< HEAD
import { Link } from "react-router";

function truncateText(text, length) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

function Bookitem({ book }) {
  return (
    <section>
        <Link to={`/BookIntroduction/${book.ID}`}>
            <div className="card bg-gradient-to-br from-orange-70 to-white w-full sm:w-70 md:w-86 lg:w-[18rem] h-145 shadow-lg">
                <figure className="px-10 pt-10 ">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="rounded-xl w-full h-auto aspect-[2/3] object-cover"
                />
                </figure>
                <div className="card-body">
                    <h3 className="card-title self-center text-2xl text-gray-700">
                        {book.title}
                    </h3>
                    <h4 className="text-lg + font-semibold self-center text-white">
                        {book.author}
                    </h4>
                    <p className="text-md p-0.25">
                        {truncateText(book.summary, 70)}
                    </p>
                    <h3 className="text-md + font-bold self-center text-yellow-200">
                        USD {book.price}
                    </h3>
                </div>
            </div>
        </Link>
    </section>
  );
=======
import { Link } from "react-router";

function truncateText(text, length) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

function Bookitem({ book }) {
  return (
    <section>
        <Link to={`/Books/${book.ID}`}>
            <div className="card bg-gradient-to-br from-blue-50 to-white w-96 shadow-lg">
                <figure className="px-10 pt-10 ">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="rounded-xl h-60 w-40 "
                />
                </figure>
                <div className="card-body">
                    <h3 className="card-title self-center text-2xl">
                        {book.title}
                    </h3>
                    <h4 className="text-md self-center">
                        {book.author}
                    </h4>
                    <p className="text-sm p-4">
                        {truncateText(book.summary, 70)}
                    </p>
                    <h3 className="text-sm self-center">
                        ${book.price}
                    </h3>
                </div>
            </div>
        </Link>
    </section>
  );
>>>>>>> d51e5b035ccdc795ff48b934dd2ea216a19ee72e
}export default Bookitem;