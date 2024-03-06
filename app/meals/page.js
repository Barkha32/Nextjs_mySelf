import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';


export const metadata = {
  title: 'All Meals',
  description: 'Brows the delicious meals, shared by our vibrant community.',
};

async function Meals(){
  const meals = await getMeals();

  return  <MealsGrid meals={meals} ></MealsGrid>;
}

export default  function MealsPage() {


  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{''}
        <span className={classes.highlight}></span> by you.</h1>
      
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
      <p className={classes.cta}>
        <Link href = "/meals/share">
          Share your favorite recipe.
        </Link>
      </p>
      </header>
      <main className={classes.main}>
        {/* // provided by react allows you to handle loading state and show fallback content until some data 
        or resourse has been loaded */}
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals></Meals>
       </Suspense>
      </main>
      
    </>
  );
}