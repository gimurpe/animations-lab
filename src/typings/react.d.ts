function createRef<T>(): RefObject<T>
interface RefObject<T> {
   // immutable
   readonly current: T | null
}

declare function useEffect(
   handler: (...args: any[]) => any,
   list: Array<any>,
): any

declare function addEventListener(
   type: string,
   listener: EventListenerOrEventListenerObject,
   options?: boolean | AddEventListenerOptions,
): void
