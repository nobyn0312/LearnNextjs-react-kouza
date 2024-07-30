const { useCallback, useState } = require("react");

export const useCounter = ()=>{
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    }, [count])

    const handleDisplay =useCallback((()=>{
      setIsShow((prevIsShow)=>!prevIsShow)
    },[]))

    return{count,isShow,handleClick,handleDisplay}
}