<h1 align="center">Standalone Component </h1>
One of the benefits of standalone components is reusability. I will show you in this tutorial how to create two simple standalone components step by step and use them in two different projects. 
<hr>

## Development Setup

 setup the first project: 
```
ng new Project1 
```
Setup the second project: 

```
ng new Project2 
```

Run the projects to observe the changes :
```
ng serve 
```

#### In the first project create a package named standAloneComponents : 

Create the first standalone component in this package : 
```
ng  g c standAloneComponents/list  –-standalone
```

create the second standalone component 
```
ng  g c standAloneComponents/card –-standalone 
```

Add index.ts in the folder standAloneComponents : 
```javascript
export * from './card/card.component' ;
export * from './list/list.component' ;
```

Add routing to those components in app.module.ts :

```javascript
const routes:Route[]=[
  {path:'card',component:CardComponent},
  {path:'list',component:ListComponent},
]
```
> **_NOTE:_**  
. The list component will use angular material table. <br>
. The card component will use angular material card.

Add now  angular  material to  the project1 :
```
ng add @angular/material
```

Add MatCardModule to card.coponent.ts
```javascript
import {MatCardModule} from '@angular/material/card';

imports: [CommonModule,MatCardModule],

import {MatCardModule} from '@angular/material/card';
 
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
```
Now design and add your work to  your components 
you could copy and paste what I have made to your components 
once you have done, you are ready to transfer your work to an another project easily.

#### In the second project : 
 
1- Add angular material to the second project 
```
ng add @angular/material
```
2- Copy the package standAloneComponents  : 

3- Copy the Routes  


