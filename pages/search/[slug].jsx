import React from 'react'
import { Nav, SearchResult } from '../../components'
import { useRouter } from 'next/router'

const getResults = (query) => {
  let res = []
  for (let i=0; i <= 40; i++) {
    res.push({
      title: 'Title of Article',
      path: '/path/to/article',
      excerpt: <div>
        <p>

Lorem ipsum dolor sit amet, <span className='font-extrabold text-accent-1 underline'>consectetur</span> adipiscing elit. Vivamus ac dolor non metus suscipit feugiat. Proin ultrices turpis eget nisi commodo, ullamcorper bibendum justo sodales. Aenean hendrerit velit ac metus porta, nec maximus purus congue. Suspendisse bibendum vestibulum orci maximus placerat. Phasellus eget ultricies leo. Curabitur orci urna, imperdiet nec lacus in, semper tincidunt nulla. Duis ultricies tortor at mauris ullamcorper, id tempor mi auctor. Fusce sit amet sapien convallis, accumsan sem sodales, iaculis nibh.

Nulla sit amet odio lectus. Fusce tincidunt ac dui nec commodo. Aenean lacus lacus, viverra sit amet consequat viverra, fringilla vehicula magna. Fusce elementum sagittis quam quis congue. Integer vulputate nibh et orci placerat ullamcorper. Ut nec sagittis urna, non mattis massa. Vestibulum congue eleifend varius.

Ut semper ex in ligula posuere blandit. Vivamus sed tortor sed velit convallis maximus ut ac sapien. Cras sed elit at ante laoreet sagittis. Donec pretium vehicula erat, ut dictum eros blandit egestas. Phasellus sollicitudin luctus laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ipsum sapien, scelerisque eu dolor lacinia, sollicitudin laoreet quam. Fusce rhoncus enim neque, sit amet <span className='font-extrabold text-accent-1 underline'>consectetur</span> est feugiat ac. Sed eget ipsum ac lectus gravida interdum id pretium nisl. Fusce nec ultricies quam. In id facilisis velit. Vivamus quis nisi sit amet quam tincidunt accumsan non sed sem. Nulla id justo tellus. Phasellus at turpis in libero efficitur ultrices ac scelerisque tortor.

Phasellus vestibulum elit metus, nec fringilla massa cursus non. Sed cursus fermentum nunc sed sagittis. Etiam tincidunt, libero nec pellentesque mollis, tellus leo convallis lectus, eu porta mauris tortor vel eros. Integer blandit sollicitudin nisi quis elementum. Vestibulum sit amet ante nunc. Morbi cursus velit eget lorem porta, vitae accumsan nibh efficitur. Cras id ullamcorper nibh.

In vitae nulla in ligula aliquet gravida. Vivamus hendrerit a nulla a mattis. Aenean justo velit, facilisis et mauris ut, commodo vulputate metus. Maecenas eu tellus porttitor magna ornare dignissim ac ut nunc. Nunc ultrices rutrum gravida. Mauris malesuada auctor sollicitudin. Etiam lobortis, tortor at pulvinar rutrum, sapien arcu fringilla nulla, vitae tincidunt purus felis vitae massa. Proin a ornare magna. Suspendisse nec rutrum lorem, ac <span className='font-extrabold text-accent-1 underline'>consectetur</span> libero. Nulla facilisi.

Morbi <span className='font-extrabold text-accent-1 underline'>consectetur</span> imperdiet ullamcorper. Aliquam tincidunt pulvinar turpis eu egestas. Nulla quis massa eu enim porttitor tincidunt. Nullam pulvinar elit ante, ac mattis ipsum dictum ut. Aenean quam enim, porta nec est at, molestie bibendum lacus. Maecenas ornare dui vitae nibh varius, a commodo elit ultricies. Vestibulum eget luctus metus.

Sed interdum felis at egestas fermentum. Vivamus elementum, diam in fringilla viverra, est orci scelerisque orci, eu vehicula quam erat nec purus. Mauris nec sodales nisl. Curabitur ut tellus accumsan, volutpat turpis nec, convallis elit. Cras interdum est sed sollicitudin laoreet. Duis laoreet blandit hendrerit. Suspendisse potenti. Phasellus congue vitae nisi et efficitur.

In massa nisl, venenatis eget euismod sit amet, <span className='font-extrabold text-accent-1 underline'>consectetur</span> accumsan lorem. Pellentesque tortor arcu, sodales ut sapien eu, dapibus sollicitudin justo. Nulla scelerisque venenatis eleifend. Vivamus accumsan nibh eu velit egestas, quis venenatis ipsum iaculis. Curabitur sit amet eros orci. Duis mattis at enim vel tincidunt. Curabitur mollis mi eget turpis vehicula scelerisque.

Donec sollicitudin mi a malesuada aliquam. In fermentum convallis eleifend. Suspendisse laoreet eu quam et lacinia. Donec iaculis ex sit amet nisl aliquet semper. Morbi est risus, hendrerit a interdum a, commodo ac sapien. Aenean molestie sapien in augue rutrum varius. Vestibulum ultrices turpis mi, in pellentesque purus dapibus sit amet. Nullam ornare condimentum nulla vel <span className='font-extrabold text-accent-1 underline'>consectetur</span>. Fusce et convallis augue. Nam auctor accumsan lacus, id fermentum tellus lacinia eu. Phasellus sem velit, iaculis quis sollicitudin eget, sagittis at velit.

Duis id suscipit ante. Nulla facilisi. Quisque molestie commodo lectus, et tincidunt ipsum ultrices id. Praesent id pharetra nulla. Fusce velit felis, tempor molestie eleifend non, accumsan a dui. Sed bibendum lectus augue, id molestie erat placerat ut. Aenean dapibus, ex at blandit ornare, augue ex lobortis nisi, sed tempor leo augue sed erat.

Donec sit amet vehicula metus, quis consequat mauris. Sed commodo vehicula ex, a egestas mi fringilla sed. Praesent imperdiet pellentesque rutrum. Pellentesque vestibulum nulla augue, non ornare purus sodales non. Maecenas pharetra vulputate enim, in accumsan felis pellentesque at. Nulla eget mauris non elit venenatis rutrum nec et elit. Maecenas dolor risus, accumsan sit amet felis vitae, blandit bibendum nibh. Integer eu egestas orci. Duis ut sapien vitae velit scelerisque ultrices vel vel neque. Nullam pulvinar sit amet nibh sit amet commodo. Donec quis tincidunt arcu, et porttitor ante. Sed dui augue, feugiat sit amet facilisis non, dignissim auctor urna. Mauris id ornare est, sit amet tincidunt lorem.

Quisque dignissim odio quam, ut aliquet velit imperdiet id. Proin cursus eros nec nisi efficitur vulputate. Sed vulputate congue ullamcorper. Cras sem urna, cursus sed hendrerit quis, consequat eu ligula. Aliquam erat volutpat. Morbi non ante ut dolor interdum mollis. Integer id blandit leo. Pellentesque bibendum semper nisl, sed gravida ex mollis lacinia. Quisque in nisl eget ante fermentum aliquam. Praesent tempor eros sed orci accumsan, ut sodales magna imperdiet. Sed tempor sapien quis turpis interdum hendrerit. Fusce pulvinar aliquam tortor, nec commodo arcu maximus in. Sed sit amet felis mollis, ullamcorper justo quis, rutrum augue. Cras at blandit massa. Etiam quis lacinia risus. Sed hendrerit et risus id lacinia.

Vestibulum id libero lobortis, mollis ligula vitae, tempus tellus. Etiam vehicula dolor in volutpat dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultricies orci id eros vestibulum, sit amet scelerisque velit sagittis. Proin a malesuada dui. Aenean condimentum urna sit amet diam mollis, vitae efficitur dolor rutrum. Duis tincidunt faucibus erat eu pellentesque. Ut lectus ligula, cursus nec mollis sed, dapibus ac risus. Duis elementum consequat sem, vitae sollicitudin urna tristique ac. Maecenas tempus ornare enim, et tincidunt ante placerat sed. Aliquam erat volutpat. Etiam rhoncus mauris non risus vulputate commodo. In eleifend efficitur sem. Maecenas orci ipsum, vulputate vel laoreet vel, dapibus a nibh.

Cras pharetra nisi vitae semper facilisis. Mauris pharetra augue a sapien rhoncus tempus. Aenean neque neque, dictum dignissim pulvinar non, gravida sit amet elit. Cras eu porttitor arcu, a dignissim nunc. Mauris vel nibh sed quam blandit efficitur id in odio. Sed nibh urna, finibus a tincidunt id, faucibus nec nisl. Donec quis lectus rhoncus, lacinia dolor sed, facilisis dolor. Vivamus fermentum sapien leo. Sed volutpat neque eu aliquam <span className='font-extrabold text-accent-1 underline'>consectetur</span>.

Donec ultricies massa nisi, sit amet hendrerit tellus feugiat a. Donec lobortis ullamcorper accumsan. Praesent sed velit pellentesque, rutrum mi sit amet, interdum massa. Nulla et risus a nulla finibus lacinia vitae posuere sem. Duis eu tellus in ligula imperdiet fermentum eget a massa. Nam cursus erat non tincidunt dapibus. In ac sagittis erat, sit amet tincidunt lectus. Quisque ut facilisis velit, a laoreet urna. Sed ut sem egestas, cursus magna at, congue est. Nullam quis massa id mi gravida placerat. Fusce auctor ultrices luctus.

Etiam sit amet pharetra diam, vitae condimentum risus. Aenean lacinia tortor elit, vitae cursus tortor mattis non. Pellentesque sodales varius orci. Maecenas pretium rhoncus dui at faucibus. Cras sed mollis magna. Curabitur scelerisque condimentum elit vitae gravida. Aliquam nibh felis, dignissim ut venenatis non, mollis vel mi. Aliquam vulputate leo non tellus molestie auctor. Pellentesque egestas lectus sed ligula semper sodales.

Phasellus eget lacinia sem, sed vulputate nisi. Integer in ante vel lorem tempus egestas eu at ligula. In auctor suscipit nibh, sed condimentum diam porta ut. Fusce sollicitudin porttitor blandit. Cras ipsum nunc, vestibulum viverra semper vitae, sollicitudin non metus. Donec hendrerit bibendum est, sed dictum turpis tincidunt at. Vestibulum nec risus iaculis, feugiat ante tristique, vulputate libero. Curabitur enim augue, rhoncus a laoreet vel, lacinia eget erat. Donec pellentesque mi et nisi efficitur tincidunt. Mauris maximus cursus nisi vel porta. Nam quis eleifend dolor.

Ut commodo lacus ac massa semper tristique. Mauris rhoncus augue eu malesuada vestibulum. Nam eu libero quis quam vestibulum lacinia at vitae velit. Vivamus in vehicula mi. Nulla facilisi. Quisque eget dignissim tellus. Morbi pharetra eu tellus ac congue. Duis eu purus vitae nisi semper aliquam at quis nulla. Curabitur orci leo, commodo non nisi id, convallis dapibus tellus. In tempor neque sed sapien auctor dictum ac in massa. Morbi vel massa id tortor iaculis dignissim non eleifend neque.

Nulla maximus lacinia ligula, et mattis urna luctus sed. Sed eleifend efficitur arcu vel tempus. Vivamus ac purus dapibus, pellentesque ipsum at, dapibus ante. Nam rhoncus sem in maximus lobortis. In hac habitasse platea dictumst. Maecenas id nulla convallis, tincidunt velit non, consequat mi. Pellentesque metus purus, vehicula et tortor non, mattis vestibulum ligula. Integer porta euismod tortor a tincidunt. Nunc pulvinar nulla interdum nisl aliquam, ut ornare libero laoreet. Curabitur porta mi diam, at facilisis orci pharetra eu. Integer ac dignissim mi, quis pellentesque odio. Integer condimentum enim id ex blandit varius. Aenean non erat finibus, elementum sapien nec, sollicitudin leo. Curabitur eget libero fringilla, blandit mauris at, venenatis quam.

Integer pharetra, metus at consequat volutpat, est arcu vulputate urna, id mattis nulla dui ac ipsum. Curabitur a mollis tellus. Curabitur ut porta sem. Morbi ut augue vestibulum, pulvinar risus ut, suscipit risus. Sed lacinia mauris eget odio dignissim, quis interdum dolor ultrices. Sed id ultrices metus. Morbi vel enim erat. Maecenas ac mi non magna rutrum tincidunt. Donec pharetra tortor finibus ante dignissim iaculis non eget nunc. Etiam vel urna justo. Maecenas at dignissim massa. Integer rhoncus augue et lorem ultrices, tempus rhoncus mi placerat. Cras tempor, lectus at sagittis varius, ante urna sollicitudin est, at rutrum sem nunc nec sem. Quisque eget elit sit amet mauris lobortis ultricies. </p>
      </div>,
    })
  }

  return res
}

const Search = () => {
  const { asPath } = useRouter()
  let query = asPath.split('/search/')[1].replace('-', ' ')
  const res = getResults(query);
  
  return (
    <>
      <Nav />
      <div className="h-20 "></div>
      <div className='min-h-screen px-6 py-6 bg-deep-1 text-accent-1'>
        <h1 className="text-4xl font-bold">Showing Results for: "{query}"</h1>
        <hr className="border-2 mt-4 rounded-full" />
        <div className="mt-4 flex flex-col space-y-4">
          {res.map((result) => <SearchResult result={result}/>)}
        </div>
      </div>
    </>
  )
}

export default Search