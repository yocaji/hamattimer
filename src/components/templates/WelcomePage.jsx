import Image from 'next/image';
import ButtonLetsTryNega from '../molecules/ButtonLetsTryNega';
import ButtonLetsTryPosi from '../molecules/ButtonLetsTryPosi';
import PrivacyPolicy from '../molecules/PrivacyPolicy';
import Terms from '../molecules/Terms';
import Footer from '../organizations/Footer';

export default function WelcomePage() {
  return (
    <div className={'ht-wrapper'}>
      <div className={'ht-wrapper__main'}>
        <div
          className={
            'hero is-primary has-text-centered is-family-secondary has-background-hero'
          }
        >
          <div className={'hero-body'}>
            <div className={'container is-max-widescreen'}>
              <div className={'columns is-vcentered'}>
                <div className={'column is-4 has-text-right'}>
                  <Image
                    src={'/logomark.png'}
                    width={240}
                    height={240}
                    alt={'ロゴマーク'}
                  />
                </div>
                <div className={'column has-text-left'}>
                  <Image
                    src={'/logotype-large.png'}
                    width={600}
                    height={240}
                    alt={'＼プログラミングでハマる前に／はまったいまー'}
                  />
                </div>
              </div>
              <div className={'mt-5 content'}>
                <p className={'lh-2 is-size-4'}>
                  プログラミングをしていてハマった時に、時間を浪費してしまって後悔したことはありませんか？
                </p>
                <p className={'lh-2 is-size-4'}>
                  時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、
                  <br />
                  はまったいまーはあなたの問題解決への取り組みをサポートします。
                </p>
              </div>
              <div className={'mt-6'}>
                <ButtonLetsTryNega />
              </div>
            </div>
          </div>
        </div>
        <div className={'hero has-background-mist is-family-secondary'}>
          <div className={'hero-body'}>
            <div className={'container has-text-centered is-max-widescreen'}>
              <h3 className={'title is-1 mb-6'}>こんな経験はないですか？</h3>
              <div className={'tile is-ancestor'}>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>1</h4>
                    <Image
                      src={'/without-1.png'}
                      width={300}
                      height={300}
                      alt={'エラーに気付いた女性のイラスト'}
                    />
                    <p className={'subtitle lh-1'}>
                      プログラミングで
                      <br />
                      思わぬエラー発生🚨
                    </p>
                  </div>
                </div>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>2</h4>
                    <Image
                      src={'/without-2.png'}
                      width={300}
                      height={300}
                      alt={
                        'PCに向かっているもののうまく行かない様子の女性のイラスト'
                      }
                    />
                    <p className={'subtitle lh-1'}>
                      すぐに解決できると思ったのに
                      <br />
                      あれ…？
                    </p>
                  </div>
                </div>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>3</h4>
                    <Image
                      src={'/without-3.png'}
                      width={300}
                      height={300}
                      alt={'時間が経って魂が抜けた女性のイラスト'}
                    />
                    <p className={'subtitle lh-1 mt-4'}>
                      こんなはずじゃなかった💭
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'hero has-background-cloud is-family-secondary'}>
          <div className={'hero-body'}>
            <div className={'container has-text-centered is-max-widescreen'}>
              <h3 className={'title is-1 mb-6'}>はまったいまーを使うと</h3>
              <div className={'tile is-ancestor'}>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>1</h4>
                    <Image
                      src={'/without-1.png'}
                      width={300}
                      height={300}
                      alt={'エラーに気付いた女性のイラスト'}
                    />
                    <p className={'subtitle lh-1'}>
                      プログラミングで
                      <br />
                      思わぬエラー発生🚨
                    </p>
                  </div>
                </div>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>2</h4>
                    <Image
                      src={'/with-2.png'}
                      width={300}
                      height={300}
                      alt={'PCに向かって順調な様子の女性のイラスト'}
                    />
                    <p className={'subtitle lh-1'}>
                      タイマーとメモを使って
                      <br />
                      効率的に取り組める
                    </p>
                  </div>
                </div>
                <div className={'tile is-parent'}>
                  <div className={'tile-is-child box is-shadowless'}>
                    <h4 className={'title'}>3</h4>
                    <Image
                      src={'/with-3.png'}
                      width={300}
                      height={300}
                      alt={'両手を上げて喜んでいる女性のイラスト'}
                    />
                    <p className={'subtitle lh-1'}>
                      詰まった時に早めに質問できた!
                      <br />
                      自己解決しやすくなった✨
                    </p>
                  </div>
                </div>
              </div>
              <div className={'mt-6'}>
                <ButtonLetsTryPosi />
              </div>
            </div>
          </div>
        </div>
        <div className={'hero has-background-mist is-family-secondary'}>
          <div className={'hero-body'}>
            <div className={'container is-max-widescreen'}>
              <h3 className={'title is-1 mb-6 has-text-centered'}>
                はまったいまーの始め方
              </h3>
              <div className={'box is-shadowless is-size-5 content'}>
                <section className={'section'}>
                  <h4 className={'title is-3'}>
                    1. タイマーを設定してスタート
                  </h4>
                  <p className={'lh-1'}>
                    リマインドしてほしい時間を選んでスタートボタンをクリックします。
                  </p>
                  <Image
                    src={
                      'https://res.cloudinary.com/hamattimer/image/upload/v1665911856/xdznlvty2v0cgpteddxg.png'
                    }
                    width={600}
                    height={248}
                    quality={85}
                    alt={'タイマーのスクリーンショット'}
                  />
                  <h4 className={'title is-3 mt-6'}>
                    2. 解決したいことを記入する
                  </h4>
                  <p className={'lh-1'}>
                    テキストエリアではMarkdown記法が使えます。
                  </p>
                  <Image
                    src={
                      'https://res.cloudinary.com/hamattimer/image/upload/v1665919002/d9b451j6dwwhvzzsac4z.png'
                    }
                    width={880}
                    height={684}
                    quality={85}
                    alt={'メモ機能のスクリーンショット'}
                  />
                  <h4 className={'title is-3 mt-6'}>3. 試したことを記入する</h4>
                  <Image
                    src={
                      'https://res.cloudinary.com/hamattimer/image/upload/v1665912484/xmxn2c9o2yulwu7ugmtd.png'
                    }
                    width={880}
                    height={856}
                    quality={85}
                    alt={'保存機能のスクリーンショット'}
                  />
                </section>
              </div>
              <div className={'mt-6 has-text-centered'}>
                <ButtonLetsTryPosi />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'ht-wrapper__sub'}>
        <Footer>
          <Terms />｜<PrivacyPolicy />
        </Footer>
      </div>
    </div>
  );
}
