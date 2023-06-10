/* eslint-disable react-hooks/rules-of-hooks */

import { Box } from "@chakra-ui/react";
import metaVar from "../../data/meta.json";
import React, { useEffect, useState } from "react";

interface IMyAppContext {
  meta: {
    name: string;
    subtitle: string;
  };
  setMeta: React.Dispatch<any>;
  hideSideBar: boolean;
  setHideSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IParentComp {
  children?: any,
  value: any
}


const ParentComp = ({ children, value }: any) => {
  // const setHideSideBar = (hidden: boolean) => {
  //   console.log('ter', hidden)
  //   setCtxVal(pre2 => ({ ...pre2, hideSideBar: hidden }))
  // }

  const [ctxVal, setCtxVal] = React.useState<IMyAppContext>({ ...metaVar, ...value });
  const pageProps = children?.props || {};

  // useEffect(() => {
  //   setCtxVal(pre => ({ ...pre, meta: { ...pre.meta, name: 'gege' } }))
  // }, [value])


  if (pageProps.statusCode) {
    // console.log('err', pageProps)
  }


  const val = React.useMemo(() => {
    return {
      ...ctxVal,
      value: ctxVal,
      setValue: setCtxVal,
    }
  }, [ctxVal])
  return (
    <MainContext.Provider
      value={val}
    >
      {children}
    </MainContext.Provider >
  )
}


interface IMainContext extends React.Context<IMyAppContext> {
  Parent: ({ children, value }: any) => any
}





const ParentCompX = ({ children, value }: any) => {
  // const [val, setVal] = useState({ ...defaultValue, ...value })
  const [meta, setMeta] = useState({ ...metaVar.data, ...value })
  const [hideSideBar, setHideSideBar] = useState(true)
  const val = { meta, setMeta, hideSideBar, setHideSideBar }

  return (
    <MainContext.Provider
      value={val}
    >
      {children}
    </MainContext.Provider >
  )
}

const MainContext: IMainContext = React.createContext({}) as any;
MainContext.Parent = ParentCompX

export { MainContext };

