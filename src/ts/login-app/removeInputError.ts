export function removeInputError(e: HTMLInputElement): void {
    const parent = e.parentElement;
    const error = parent.querySelector('.invalid-feedback');
    if (!error) {
        return
    }
    e.classList.remove('is-invalid')
    parent.removeChild(error)
}