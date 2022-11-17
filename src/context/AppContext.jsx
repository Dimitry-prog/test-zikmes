import {createContext, useContext, useEffect, useState} from "react";
import {test} from "../api/api";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState({
    isOpenTooltip: false,
    type: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    setIsLoading(true);
    test(email, password)
      .then(res => {
        if(res.data){
          setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'success', message: "Вы успешно оформили заказ!"})
        }
      })
      .catch(e => {
        console.log(e);
        setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'fail', message: "Что-то пошло не так!\n" +
            "Попробуйте ещё раз."})
      })
      .finally(() => setIsLoading(false));
  }

  const handleClosePopups = () => {
    setIsInfoTooltipPopupOpen({isOpenTooltip: false, type: '', message: ''});
  }

  useEffect(() => {
    const closePopupByEscape = (e) => {
      if(e.key === 'Escape') {
        handleClosePopups();
      }
    }

    const closePopupByOverlay = (e) => {
      if (e.target.classList.contains('open')) {
        handleClosePopups();
      }
    }

    if(isInfoTooltipPopupOpen) {
      document.addEventListener('keydown', closePopupByEscape);
      document.addEventListener('mousedown', closePopupByOverlay);
      return () => {
        document.removeEventListener('keydown', closePopupByEscape);
        document.removeEventListener('mousedown', closePopupByOverlay);
      }
    }
  }, [isInfoTooltipPopupOpen]);

  return (
    <AppContext.Provider value={{
      isInfoTooltipPopupOpen,
      isLoading,
      handleSubmit,
      handleClosePopups
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext}