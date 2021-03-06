const regExpDic:{email:RegExp, password:RegExp} = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

export function validate(element: HTMLInputElement): boolean {
  const RegExpName: string = element.dataset.required;
  if (!regExpDic[RegExpName]) return true;
  
  return regExpDic[RegExpName].test(element.value);
}

