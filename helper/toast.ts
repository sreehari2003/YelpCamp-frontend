import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const toastList = new Set();
const MAX_TOAST = 3;

export const notifyMessage = (string: string) => {
  let toastIdToDismiss: any = null;
  if (toastList.size === MAX_TOAST) {
    const arr = Array.from(toastList);
    const toastId = arr[0];
    if (toastId) {
      toastIdToDismiss = toastId;
    }
    // toast.dismiss(toastId);
  }

  const id: any = toast.dark(string, {
    position:"top-right",
    // I'm using the onClose hook here to remove the id
    // from the set
    onClose: () => toastList.delete(id),
    onOpen: () => {
      if (toastIdToDismiss !== null) {
        setTimeout(() => {
          toast.dismiss(toastIdToDismiss);
        }, 1000);
      }
    },
  });
  toastList.add(id);
}
