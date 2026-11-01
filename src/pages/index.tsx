import BannerHome from "@/components/bannerHome"
import MainBanners from "@/components/bannerMain"
import BannerService from "@/components/bannerService"
import SecondBanner from "@/components/secondBanner"

const homePage = ()=>{
  return(


//absolute inset-x-0 top-1/2 -translate-y-1/2
    <main>

        <BannerHome/>

        <MainBanners/>
        
        <BannerService/>

        <SecondBanner/>

    </main>
  )
}

export default homePage