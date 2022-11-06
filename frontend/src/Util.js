// 構造体
import React from "react";


//alias modelの部分
// export type Model = {
// 	key : Nav.Key
//     , url : Url.Url
//     , address : Maybe Address
//     , accounts : List [Account]
//     , addField : AddField
//     , depositField : DepositField
// }

type Address :String

//alias accountの部分
export type Account = { 
	id : String
    , subject : String
    , description : String
    , contractAddress : Address 
    , tokenName : String
    , tokenSymbol : String
    , targetAmount : String 
    , monthlyRemittrance : String 
    , created : Int  
    , balance : String 
}

export type  DepositField = { 
	  value : Float
    , tokenBalance : String
    , amountError :String //Maybe使ってあったけどMaybeってなんや
    , result : Bool
    }

//alias addfieldの部分
export type AddField = { 
	subject : String
    , description : String
    , contractAddress : Address
    , targetAmount : Float
    , monthlyRemittrance : Float
    , errors : List [AddField, String] //直し方がわからん
    , sending : Bool
    }
