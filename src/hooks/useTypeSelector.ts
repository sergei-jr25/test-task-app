import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store'

export const TypeSelecor: TypedUseSelectorHook<RootState> = useSelector
