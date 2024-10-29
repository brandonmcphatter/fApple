import AppleWatch10Tile from "@/components/FeaturedContent/SmallSection/AppleWatch10Tile";
import AirPodProTile from "@/components/FeaturedContent/SmallSection/AirPodProTile";
import IPadMini2Tile from "@/components/FeaturedContent/SmallSection/iPadMini2Tile";
import AppleCardTile from "@/components/FeaturedContent/SmallSection/AppleCardTile";

export default function SmallContentSection() {

    return (
        /*smaller tile section*/
        <div className={' md:grid md:grid-cols-2 md:mx-3 md:gap-3 md:mb-3'}>
            <div className={'mb-3 md:mb-0'}>
                <AirPodProTile/>
            </div>
            <div className={'mb-3 md:mb-0'}>
                <IPadMini2Tile />
            </div>
            <div className={'mb-3 md:mb-0'}>
                <AppleWatch10Tile/>
            </div>
            <div className={'mb-3 md:mb-0'}>
                <AppleCardTile />
            </div>
        </div>
    )
}