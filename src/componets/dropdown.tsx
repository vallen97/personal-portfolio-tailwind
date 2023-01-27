import { Menu } from "@headlessui/react";
import React from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

interface dropdownProps {
  mainButtonText: String;
  arrDropdown: Array<String>;
  class: any;
  save: boolean;
  isBird: boolean;
}
// https://flowbite.com/docs/components/dropdowns/
// https://headlessui.com/react/menu
export const Dropdown: React.FC<dropdownProps> = (props) => {
  let functionCalls = props.class;
  let useSaveFunction = props.save;
  let isBirdClass = props.isBird;
  return (
    <>
      <div className="text-center w-auto mx-4  my-2">
        <Menu as="div" className="relative inline-block !text-center">
          <div>
            <Menu.Button className="!bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer inline-flex w-full justify-center !text-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {props.mainButtonText}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="!bg-materialUI-LightTertiary !dark:bg-materialUI-DarkTertiary  content-center mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {props.arrDropdown.map((buttonText: any, index: number) => (
                <React.Fragment key={index.toString()}>
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm text-materialUI-LightOnTertiary dark:text-materialUI-DarkOnTertiary`}
                          onClick={() => {
                            if (!isBirdClass)
                              if (useSaveFunction)
                                functionCalls.saveCustomSnake(index);
                              else functionCalls.loadCustomSnake(index);
                            else {
                              if (useSaveFunction)
                                functionCalls.saveCustomBird(index);
                              else functionCalls.loadCustomBird(index);
                            }
                          }}
                        >
                          {buttonText}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </React.Fragment>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default Dropdown;
