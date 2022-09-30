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
      <div className={'hero has-text-centered'}>
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
          </div>
          <p className={'lh-2 is-size-5 has-text-weight-bold mt-6'}>
            プログラミングをしていてハマった時に、時間を浪費してしまって後悔したことはありませんか？<br/>
            時間に区切りを作って取り組むためのタイマー機能と、思考を整理するためのメモ機能で、<br/>
            はまったいまーはあなたの問題解決への取り組みをサポートします。
          </p>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-paper'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <div className={'columns is-centered'}>
              <div className={'column is-two-fifths'}>
                <h3 className={'title has-border-bottom-bold pb-3 mb-5'}>はまったいまーが無いとき</h3>
              </div>
            </div>
            <div className={'columns'}>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>思わぬエラー発生💥</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>一生懸命やっているのに…あれ？</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>気が付いたら時間だけが過ぎてた😱</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'hero has-text-centered has-background-sand'}>
        <div className={'hero-body'}>
          <div className={'container is-max-widescreen'}>
            <div className={'columns is-centered'}>
              <div className={'column is-two-fifths'}>
                <h3 className={'title has-border-bottom-bold pb-3 mb-5'}>はまったいまーがあるとき</h3>
              </div>
            </div>
            <div className={'columns'}>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>思わぬエラー発生💥</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>タイマーとメモを使って取り組む</p>
              </div>
              <div className={'column'}>
                <Image src={'/dummy.png'} width={300} height={300} alt={'はまったいまーロゴ'}/>
                <p className={'subtitle lh-1 mt-3 has-text-weight-bold'}>詰まった時に早めに質問できた😊<br/>自己解決しやすくなった🙌</p>
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
                <button className={'button is-large is-rounded is-primary is-fullwidth has-text-weight-bold'}>
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
