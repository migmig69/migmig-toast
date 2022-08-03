import { FormEvent } from "react";
import { useToast } from "./useToast";
import { positionClasses } from "./utils";

const inputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const selectClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const labelClasses =
  "block text-sm font-medium text-gray-900 dark:text-gray-300 mt-3 mb-2";

const buttonClasses =
  "my-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

export const PlayGround = () => {
  const { add } = useToast();

  return (
    <div className="flex justify-center items-center p-6 min-h-screen min-w-screen dark:bg-gradient-to-br from-[#333867] to-[#17193b]">
      <div className="bg-neutral-100 dark:bg-black/30 max-w-md rounded-2xl p-6 shadow-xl">
        {" "}
        <form
          className="flex flex-wrap w-full"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const { type, message, duration, position, icon } = e.currentTarget
              .elements as any;
            //
            add({
              type: type.value,
              message: message.value,
              duration: duration.value,
              position: position.value,
              icon: icon.value,
            });
          }}
        >
          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Toast Type</label>
            <select name={"type"} className={selectClasses}>
              <option value="info">info</option>
              <option value="error">error</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
            </select>
          </div>

          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Toast duration</label>
            <input
              name={"duration"}
              type={"number"}
              defaultValue={3000}
              className={inputClasses}
            />
          </div>

          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Message</label>
            <textarea
              name={"message"}
              defaultValue={"Lorem ipsum dolor sit"}
              className={inputClasses}
            />
          </div>

          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Position</label>
            <select
              name={"position"}
              defaultValue={"topRight"}
              className={selectClasses}
            >
              {Object.keys(positionClasses).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Dark mode</label>
            <input
              type={"checkbox"}
              className={
                "w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-black/30 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              }
              onChange={() => {
                document.body.classList.toggle("dark");
              }}
            />
          </div>

          <div className="w-full lg:w-1/2 px-1">
            <label className={labelClasses}>Toast icon</label>
            <input name={"icon"} type={"text"} className={inputClasses} />
          </div>

          <button type={"submit"} className={buttonClasses}>
            Create Toast
          </button>

          <hr />
          <button
            className={buttonClasses}
            onClick={(e) => {
              e.preventDefault();
              add({
                icon: false,
                type: "success",
                message: (
                  <div className="text-center">
                    <h5 className=" bg-blue-300 rounded-sm p-1 mb-2 text-green-900 dark:text-black/70">
                      🚀 Item Created
                    </h5>
                    <div className="font-normal p-1">
                      Take a look{" "}
                      <a
                        className="text-blue-800 dark:text-blue-400"
                        href={"/"}
                      >
                        (Link)
                      </a>
                    </div>
                  </div>
                ),
                duration: 0,
                position: "topCenter",
              });
            }}
          >
            Create With Custom Message
          </button>
        </form>
      </div>
    </div>
  );
};
