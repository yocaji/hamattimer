import Image from 'next/image'
import ButtonLetsTryNega from '../molecules/ButtonLetsTryNega'
import Footer from '../organizations/Footer'
import ButtonLetsTryPosi from '../molecules/ButtonLetsTryPosi'

export default function WelcomePage() {
  return (
    <>
      <div className={'hero is-primary has-text-centered is-family-secondary has-background-hero'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <div className={'columns is-vcentered'}>
              <div className={'column is-4 has-text-right'}>
                <Image src={'/logomark-nega.png'} width={240} height={240} quality={100} alt={'はまったいまーロゴマーク'}/>
              </div>
              <div className={'column has-text-left'}>
                <Image src={'/logotype.png'} width={600} height={240} alt={'はまったいまーロゴタイプ'}/>
              </div>
            </div>
            <div className={'mt-5'}>
              <p className={'lh-2 is-size-5'}>
                プログラミングをしていてハマった時に、時間を浪費してしまって後悔したことはありませんか？
              </p>
              <p className={'lh-2 is-size-5 mt-3'}>
                時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、<br/>
                はまったいまーはあなたの問題解決への取り組みをサポートします。
              </p>
            </div>
            <div className={'mt-6'}>
              <ButtonLetsTryNega/>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-cloud is-family-secondary'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1 mb-6'}>こんな経験はないですか？</h3>
            <div className={'tile is-ancestor'}>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>1</h4>
                  <Image src={'/without-1.jpeg'} width={300} height={300} alt={'エラーに気付いた女性のイラスト'}/>
                  <p className={'subtitle lh-1'}>プログラミングで<br/>思わぬエラー発生🚨</p>
                </div>
              </div>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>2</h4>
                  <Image src={'/without-2.jpeg'} width={300} height={300} alt={'PCに向かっているもののうまく行かない様子の女性のイラスト'}/>
                  <p className={'subtitle lh-1'}>一生懸命やっているけど<br/>あれ…？</p>
                </div>
              </div>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>3</h4>
                  <Image src={'/without-3.jpeg'} width={300} height={300} alt={'時間が経って魂が抜けた女性のイラスト'}/>
                  <p className={'subtitle lh-1 mt-4'}>こんなはずじゃなかった💭</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-myst is-family-secondary'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1 mb-6'}>はまったいまーを使うと</h3>
            <div className={'tile is-ancestor'}>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>1</h4>
                  <Image src={'/without-1.jpeg'} width={300} height={300} alt={'エラーに気付いた女性のイラスト'}/>
                  <p className={'subtitle lh-1'}>プログラミングで<br/>思わぬエラー発生🚨</p>
                </div>
              </div>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>2</h4>
                  <Image src={'/with-2.jpeg'} width={300} height={300} alt={'PCに向かって順調な様子の女性のイラスト'}/>
                  <p className={'subtitle lh-1'}>タイマーとメモを使って<br/>効率的に取り組める</p>
                </div>
              </div>
              <div className={'tile is-parent'}>
                <div className={'tile-is-child box is-shadowless'}>
                  <h4 className={'title'}>3</h4>
                  <Image src={'/with-3.jpeg'} width={300} height={300} alt={'両手を上げて喜んでいる女性のイラスト'}/>
                  <p className={'subtitle lh-1'}>詰まった時に早めに質問できた!<br/>自己解決しやすくなった✨</p>
                </div>
              </div>
            </div>
            <div className={'mt-6'}>
              <ButtonLetsTryPosi/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
