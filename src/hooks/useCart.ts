import { TypeSelecor } from './useTypeSelector'

export const useCart = () => TypeSelecor(state => state.cart)
