
import './App.css';
import Card from './components/card';


function App() {
  return (




 <div className="flex items-center justify-center min-h-screen">
 <h1 className='bg-green-400 text-black text-center rounded-xl p-4 w-1/2'>Tailwind test</h1> 


{/* ye wese hi image k liye use kiye the  */}

{/* 
 <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://samples-files.com/samples/Images/jpg/1920-1080-sample.jpg" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
 */}



{/* ye card wala hai yahi same card.js mai bs yha import kra liya hai */}

{/* <div class="relative h-[400px] w-[300px] rounded-md ml-4">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div> */}
<Card username="Mohit" btnText="clickme" customimg="https://up.yimg.com/ib/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&rs=1&c=1&qlt=95&w=220&h=104"/>
<Card username="Yash" btnText="visitme" customimg="https://up.yimg.com/ib/th?id=OIP.PikUdeXdPP5f3FAwKZYtlQHaJQ&pid=Api&rs=1&c=1&qlt=95&w=83&h=104"/>





 </div>
  );
}

export default App;
