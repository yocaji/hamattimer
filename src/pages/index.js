import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LetsTryButton from '../components/elements/LetsTryButton'

export default function Index() {
  return (
    <>
      <Head>
        <title>はまったいまー</title>
      </Head>
      <Navbar letsTryButton={<LetsTryButton/>}/>
      <div className={'hero has-text-centered has-background-paper'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <div className={'columns is-vcentered'}>
              <div className={'column is-4 has-text-right'}>
                <Image src={'/dummy.png'} width={240} height={240} alt={'はまったいまーロゴマーク'}/>
              </div>
              <div className={'column has-text-left'}>
                <Image src={'/logotype-large.png'} width={600} height={141} alt={'はまったいまーロゴタイプ'}/>
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
      <div className={'hero has-text-centered has-background-subtle'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1'}>はまったいまーが無いとき</h3>
            <hr className={'hero-separator'}/>
            <div className={'columns'}>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>思わぬエラー発生🚨</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>一生懸命やっているのに…あれ？</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>気が付いたら時間だけが過ぎてた😱</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-paper'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <h3 className={'title is-1'}>はまったいまーがあるとき</h3>
            <hr className={'hero-separator'}/>
            <div className={'columns'}>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>思わぬエラー発生🚨</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>タイマーとメモを使うから<br/>効率的に取り組める✨</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3'}>詰まった時に早めに質問できた😊<br/>自己解決しやすくなった🙌</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered'}>
        <div className={'hero-body'}>
          <div className={'columns is-centered'}>
            <div className={'column is-one-third'}>
              <Link href={'timer'}>
                <button className={'button is-large is-rounded is-primary is-fullwidth'}>
                  使ってみる
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
