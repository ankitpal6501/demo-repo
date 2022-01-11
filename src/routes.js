
import Home3 from "../src/components/Home3"
import Home2 from "../src/components/Home2"
import Home1 from "../src/components/Home1"
import Home4 from "../src/components/Home4"
import singleBlog from "../src/components/singleBlog"


export default  [
    {path:'/',component:Home1},
    {path:'/home2',component:Home2},
    {path:'/home3',component:Home3},
    {path:'/home4',component:Home4},
    {path:'/singleBlog/:id',component:singleBlog}
]