import { Dispatch, SetStateAction } from 'react' 

export type state = {
    loaded: boolean
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    setLoaded: Dispatch<SetStateAction<boolean>>

}  