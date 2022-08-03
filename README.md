# Our Toast features:

- Four Themes(success, info, warning, error)
- Auto dismiss(with progressbar)
- Six different positions

# Instructions

_This page also contains some Types, Icons and utility classes for me to speed up the Video_

- Install Tailwind CSS with Create React App (I already did it) [Link](https://tailwindcss.com/docs/guides/create-react-app)
- Install clsx (I already did it): `yarn add clsx`
- Take a look at `package.json`, `postcss.config.js`, `tailwind.config.js` and `index.css`
- Create Toast component and import it to App.tsx

Here is the Toast Type:

`types.ts`:

```typescript
export type ToastProps = {
  id: number;
  type?: "success" | "info" | "warning" | "error";
  message?: ReactNode;
  duration?: number;
  position?: ToastPositionType;
  icon?: ReactNode | boolean;
};

export type ToastPositionType =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomRight"
  | "bottomCenter"
  | "bottomLeft";

export type RequiredToastProps = Required<ToastProps>;
```

`utils.tsx`:

```typescript
// RequiredToastProps prevents Type Error
export const wrapperClasses: Record<RequiredToastProps["type"], string> = {
  info: "bg-blue-100 dark:bg-blue-800 dark:text-blue-100",
  success: "bg-green-100 dark:bg-green-800 dark:text-green-100",
  warning: "bg-orange-100 dark:bg-orange-800 dark:text-orange-100",
  error: "bg-red-100 dark:bg-red-700 dark:text-red-100",
};
// RequiredToastProps prevents Type Error
export const iconClasses: Record<RequiredToastProps["type"], string> = {
  info: "dark:bg-blue-100 bg-blue-500 text-white dark:text-blue-500",
  success: "dark:bg-green-100 bg-green-500 text-white dark:text-green-500",
  warning: "dark:bg-orange-100 bg-orange-500 text-white dark:text-orange-500",
  error: "dark:bg-red-100 bg-red-500 text-white dark:text-red-500",
};

export const closeButtonClasses =
  "w-4 h-4 mx-3 items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex dark:hover:text-white";

export const closeIcon = (
  <svg aria-hidden="true" viewBox="64 64 896 896" fill="currentColor">
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
  </svg>
);

// return toast icon based on the toast type
export const getIcon = (type: RequiredToastProps["type"]) => {
  // This code is equivalent to Switch
  return {
    info: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
        <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
      </svg>
    ),
    error: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
        <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      </svg>
    ),
    success: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      </svg>
    ),
    warning: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path>
      </svg>
    ),
  }[type];
};
```

- We need to add a lot of stuff to `Toast.tsx`. But for now Lets create a React hook on top of our Toast component.

`types.ts`:

```typescript
export type ToastContextType = {
  add: (toast: Omit<ToastProps, "id">) => void;
  remove: (toastId: number, ref: RefObject<HTMLDivElement>) => void;
  position: ToastPositionType;
};
```

`utils.tsx`

```typescript
export const positionClasses: Record<ToastPositionType, string> = {
  topRight: "top-0 right-1",
  topCenter: "top-0 right-1/2 translate-x-1/2",
  topLeft: "top-0 left-1",
  bottomLeft: "bottom-0 left-1",
  bottomCenter: "bottom-0 right-1/2 translate-x-1/2",
  bottomRight: "bottom-0 right-1",
};
```

- Add ToastProvider to app.tsx
- for testing our component we need a PlayGround take a look before copy it:

`PlayGround.tsx`

```typescript
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
        </form>
      </div>
    </div>
  );
};
```

- in `tailwind.config.js` change tailwind default strategy for dark mode to class And test it on playground: `darkMode: "class"`
- Add onClick to Remove Button
- We need autoDismiss for our toast
- Add progressbar for autoDismiss

`Toast.tsx`:

```typescript
{
  /* progressBar */
}
<div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-500">
  <span
    className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
    style={{ width: "50%" }}
  />
</div>;
```

- Add animation to toast entrance/exist. take a look before copy it.

`tailwind.config.js`:

```javascript
  extend: {
      animation: {
        toastIn: "toastIn .8s both",
        toastOut: "toastOut .8s both",
      },
      keyframes: {
        toastIn: {
          "0%": {
            transform: "translate(2000px) scale(0.7)",
            opacity: 0.7,
          },
          "80%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        toastOut: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "20%": { transform: "translate(0px) scale(0.7)", opacity: 0.7 },
          "100%": {
            transform: "translate(2000px) scale(0.7)",
            opacity: 0.7,
          },
        },
      },
    }
```

- Add `animate-toastIn` class to your Toast wrapper in `Toast.tsx`
- Add `animate-toastOut` class to your Toast (with ref) before removing the Toast in `useToast.tsx`.
- above keyframes only works for topRight position. `translate(2000px)` should be change based on Toast position.

`types.ts`:

```typescript
export const animationVariables: Record<ToastPositionType, string> = {
  topRight: "translateX(2000px)",
  topCenter: "translateY(-1300px)",
  topLeft: "translateX(-2000px)",
  bottomLeft: "translateX(-2000px)",
  bottomCenter: "translateY(1300px)",
  bottomRight: "translateX(2000px)",
};
```

- Add this code at the end of your `playground.tsx` form. This button just creates a Toast with custom HTML as content.

```typescript
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

```
