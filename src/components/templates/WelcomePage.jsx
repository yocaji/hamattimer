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
              <div className={'columns is-mobile is-vcentered'}>
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
              <div
                className={
                  'mt-5 content lh-2 is-size-4 is-size-6-mobile has-text-left'
                }
              >
                <p>
                  プログラミングをしていてハマった時に、時間を浪費してしまって後悔したことはありませんか？
                </p>
                <p>
                  時間に区切りを作るためのタイマー機能と、思考を整理するためのメモ機能で、はまったいまーはあなたの問題解決への取り組みをサポートします。
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
              <h3 className={'title is-1 is-size-4-mobile mb-6'}>
                こんな経験はないですか？
              </h3>
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
                      すぐに解決できると思ったのに、おかしいな
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
                    <p className={'subtitle lh-1'}>
                      こんなに時間がかかるはずじゃなかった💭
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
              <h3 className={'title is-1 is-size-4-mobile mb-6'}>
                はまったいまーを使うと
              </h3>
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
                      詰まったらすぐ質問できた!
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
              <h3
                className={'title is-1 is-size-4-mobile mb-6 has-text-centered'}
              >
                はまったいまーの始め方
              </h3>
              <div className={'box is-shadowless is-size-5 content'}>
                <div className={'ht-welcome-box'}>
                  <h4 className={'title is-3 is-size-5-mobile'}>
                    1. タイマーを設定してスタート
                  </h4>
                  <p className={'lh-1 is-size-6-mobile'}>
                    リマインドしてほしい時間を選んでスタートボタンをクリックします。
                  </p>
                  <div className={'has-text-centered'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/hamattimer/image/upload/v1668639624/djtcblonp7uovxx2rq7t.png'
                      }
                      width={598}
                      height={197}
                      quality={85}
                      alt={'タイマーのスクリーンショット'}
                    />
                  </div>
                  <h4 className={'title is-3 is-size-5-mobile mt-6'}>
                    2. 解決したいことを記入する
                  </h4>
                  <p className={'lh-1 is-size-6-mobile'}>
                    テキストエリアではMarkdown記法が使えて、画像のペーストにも対応しています。
                  </p>
                  <div className={'has-text-centered'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/hamattimer/image/upload/v1668638876/kd7ri2wydlezn2cl7mnl.png'
                      }
                      width={601}
                      height={555}
                      quality={85}
                      alt={'メモ機能のスクリーンショット'}
                    />
                  </div>
                  <h4 className={'title is-3 is-size-5-mobile mt-6'}>
                    3. 試したことを記入する
                  </h4>
                  <p>
                    解決するためにどんな事を考えて何をやったのか、一つずつ書いてみましょう。
                  </p>
                  <div className={'has-text-centered'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/hamattimer/image/upload/v1668639034/gq9kc7rczwtblwgcrd15.png'
                      }
                      width={600}
                      height={689}
                      quality={85}
                      alt={'メモ機能のスクリーンショット'}
                    />
                  </div>
                  <h4 className={'title is-3 is-size-5-mobile mt-6'}>
                    4. 終わったら記録を保存する
                  </h4>
                  <p className={'lh-1 is-size-6-mobile'}>
                    作成した記録をGistに保存して、質問に使ったり後から見返したりすることができます。
                  </p>
                  <div className={'has-text-centered'}>
                    <Image
                      src={
                        'https://res.cloudinary.com/hamattimer/image/upload/v1668639326/elxzmr2w1tporwl3iujc.png'
                      }
                      width={534}
                      height={121}
                      quality={85}
                      alt={'保存機能のスクリーンショット'}
                    />
                  </div>
                </div>
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
