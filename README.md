# Belt

An all in one Utility Belt solution for TypeScript and JavaScript projects. Whether you need string manipulation, quick math calculation or currency conversion this library will hopefully offer a quick solution to any problems you may face in your day to day projects whether it be a Node.js app or Angular Front End Project.

## Installation



```javascript
npm i @prav/belt
```

## Usage
If you are intending to use this in your server side projects (in this example on written in TypScript) you can simply do the following

```javascript
import {Text, Currency, DateTime, Numeric} from "@prav/belt";

export class MyClass implements MyInterface {
  
  constructor() {
  }
  
  public myFunction():string{
   return Text.generateRandomAplhaNumericString(16); //returns a string
  }
  
}
```
Alternatively, you can use this library along side front end frameworks that also may use TypeScript, i.e. Vue, React or Angular and even their Ionic renditions (however, you may run into a run time warning in Ionic). Either way you can either import the modules as is or prototype based on the Framework you're using.

Here is a Vue.JS example of a typing:

utility.d.ts

```javascript
import { Currency, DateTime, Numeric, Text } from "@prav/belt"
declare module 'vue/types/vue' {
    interface Vue {
        $currency: typeof Currency;
        $dateTime: typeof Common;
        $numeric: typeof Common;
        $text: typeof Common;
    }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please note that this project is in its early phase and is subject to several updates

## License
[MIT](https://choosealicense.com/licenses/mit/)