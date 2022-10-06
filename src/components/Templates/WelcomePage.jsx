import Image from 'next/image'
import ButtonLetsTrySmall from '../molecules/ButtonLetsTrySmall'
import ButtonLetsTryLarge from '../molecules/ButtonLetsTryLarge'
import Navbar from '../organizations/Navbar'
import Footer from '../organizations/Footer'

export default function WelcomePage() {
  return (
    <>
      <div className={'hero has-text-centered has-background-paper'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <div className={'columns is-vcentered'}>
              <div className={'column is-4 has-text-right'}>
                <Image src={'/logomark.png'} width={210} height={240} quality={100} alt={'はまったいまーロゴマーク'}/>
              </div>
              <div className={'column has-text-left'}>
                <Image src={'/logotype.png'} width={600} height={155} alt={'はまったいまーロゴタイプ'}/>
              </div>
            </div>
            <div className={'mt-6'}>
              <div className={'p-5'}>
                <p className={'lh-2 is-size-5'}>
                  プログラミングをしていてハマった時に、時間を浪費してしまって後悔したことはありませんか？
                </p>
                <p className={'lh-2 is-size-5 mt-3'}>
                  時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、<br/>
                  はまったいまーはあなたの問題解決への取り組みをサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-pale'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1 mb-6'}>はまったいまーが無いとき</h3>
            <div className={'columns'}>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/without-1.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>思わぬエラー発生🚨</p>
                  </div>
                </div>
              </div>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/without-2.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>一生懸命やっているのに…あれ？</p>
                  </div>
                </div>
              </div>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/without-3.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>こんなはずじゃなかった💭</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-paper'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1 mb-6'}>はまったいまーがあるとき</h3>
            <div className={'columns'}>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/without-1.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>思わぬエラー発生🚨</p>
                  </div>
                </div>
              </div>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/with-2.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>タイマーとメモを使うから<br/>効率的に取り組める✨</p>
                  </div>
                </div>
              </div>
              <div className={'column'}>
                <div className={'card'}>
                  <div className={'card-image pt-4'}>
                    <Image src={'/with-3.jpeg'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                  </div>
                  <div className={'card-content'}>
                    <p className={'subtitle lh-1'}>詰まった時に早めに質問できた😊<br/>自己解決しやすくなった🙌</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered'}>
        <div className={'hero-body'}>
          <div className={'columns is-centered'}>
            <div className={'column is-4'}>
              <ButtonLetsTryLarge/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
