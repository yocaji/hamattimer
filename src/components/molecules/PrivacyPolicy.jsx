import { useState } from 'react';
import ModalPlain from '../atoms/ModalPlain';

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a onClick={() => setIsOpen(true)} className={'mx-3'}>
        プライバシーポリシー
      </a>
      {isOpen && (
        <ModalPlain onCancel={() => setIsOpen(false)}>
          <div className={'content'}>
            <h1 className={'title is-5'}>プライバシーポリシー</h1>
            <p className={'lh-1'}>
              当サイトでは、提供するサービス向上のためにGoogle社のアクセス解析ツール「Google
              アナリティクス」を使用しています。Google
              アナリティクスはデータの収集のためにCookie(※)を使用し、取得されたデータはGoogle社により同社のプライバシーポリシーに基づいて管理されます。
            </p>
            <p className={'lh-1'}>
              Googleアナリティクスに関する説明は、
              <a
                href={
                  'https://marketingplatform.google.com/about/analytics/terms/jp/'
                }
                target={'_blank'}
                rel={'noreferrer'}
              >
                Googleアナリティクス利用規約
              </a>
              と
              <a
                href={'https://policies.google.com/technologies/ads'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                Googleプライバシーポリシー
              </a>
              をご確認ください。
            </p>
            <p className={'lh-1'}>
              また、Google
              による情報収集を無効化したい場合は、Google社が提供する
              <a
                href={'https://tools.google.com/dlpage/gaoptout'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                Google アナリティクス オプトアウト アドオン
              </a>
              からオプトアウトの設定が可能です。
            </p>
            <p className={'lh-1 is-size-7'}>
              ※Cookieとは、利用者がウェブサイトに訪問した際、ブラウザーを通して利用者のコンピューターに一時的にデータを記録する仕組みのことです。Cookieには、利用者の端末に関する情報やサイトへの訪問回数といった情報が記録され、サイトへの訪問者としての利用者の識別として利用されます。
            </p>
          </div>
        </ModalPlain>
      )}
    </>
  );
}
