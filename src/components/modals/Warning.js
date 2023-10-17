import React from 'react';
import '../../assets/scss/_modal.scss';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Warning(props) {
  const handleAccept = () => {
    props.action();
    props.close();
  } 
  return (
    <Transition appear show={props.show} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={props.close}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {props.text}
              </Dialog.Title>
              <div className="buttons-wrapper">
                <button
                  type="button"
                  className="-button green"
                  onClick={handleAccept}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="-button red"
                  onClick={props.close}
                >
                  Cancel
                </button>
                
          
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  );
}