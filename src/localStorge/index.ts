export function addToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getFromLocalStorage(key:string) {
  return   JSON.parse(localStorage.getItem(key)!)
}
