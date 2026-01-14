
import { FAQNode } from './types';

export const IT_TREE: FAQNode[] = [
  {
    id: 'accounts',
    title: 'アカウント・ログイン',
    description: 'パスワード、VPN、多要素認証(MFA)など',
    icon: '👤',
    options: [
      {
        id: 'pw-reset',
        title: 'パスワードを忘れた',
        steps: [
          'セルフサービス・ポータル(Okta/AzureAD)にアクセスしてください',
          '「パスワードをお忘れですか？」をクリックします',
          '登録済みのスマホに届くSMSコードを入力してください',
          '新しいパスワードを設定します（過去3回分は使用不可）'
        ]
      },
      {
        id: 'mfa-issue',
        title: 'MFA(認証アプリ)が通らない',
        steps: [
          'スマホの時刻設定が「自動」になっているか確認してください',
          'Wi-Fiを一度オフにしてモバイル通信で試してください',
          'それでもダメな場合は、バックアップコードを使用してください'
        ]
      }
    ]
  },
  {
    id: 'it-policies',
    title: 'ITルール・セキュリティ',
    description: 'ITツール導入ルール、4つの利用レベルについて',
    icon: '🛡️',
    options: [
      {
        id: 'tool-rules',
        title: 'ITツール導入の4つのレベル',
        steps: [
          '【レベル0：禁止】提供元不明、管理画面なし、データ扱い不明なツール。使用厳禁。',
          '【レベル1：条件付OK】アイデア出しや公開前提の資料作成。※機密・顧客・個人情報は絶対入力NG。AI学習のリスクも考慮。',
          '【レベル2：業務利用OK】SOC/ISMS取得、大手採用、管理機能あり。社内外の通常業務で使用可。',
          '【レベル3：要相談】顧客指定ツール、管理者権限の変更が必要なもの、インストールが必要なもの。',
          '迷った時は「お客様情報が入るか？」「説明できるか？」を確認し、自己判断せず #support-ict へ相談。'
        ]
      },
      {
        id: 'ict-consult',
        title: 'ICTへの相談方法',
        steps: [
          '相談時は以下の情報を #support-ict で伝えてください：',
          '1. ツール/サービス名',
          '2. 利用目的（具体的な業務内容）',
          '3. 扱う情報の種類（公開情報/社内資料/顧客情報など）',
          '4. 利用期間（短期・継続）'
        ]
      }
    ]
  },
  {
    id: 'applications',
    title: '各種申請・手続き',
    description: 'BYOD申請、アカウント発行、備品リクエストなど',
    icon: '📝',
    options: [
      {
        id: 'byod-apply',
        title: 'BYOD（私物端末）利用申請',
        steps: [
          '【前提条件】MDA（秘密保持合意）および業務委託契約の締結が必須です。未締結なら利用不可。',
          '【対象端末】PC(Win/Mac)、スマートフォン、タブレット(iPad等)。',
          '【申請が必要な時】新規利用開始、端末買替、利用終了時。',
          '【申請方法】現在は「BYOD_利用申請書」を用いた暫定フローです。（申請書提出→上長承認→ICT確認）',
          '【注意事項】紛失時は直ちにICTへ連絡。データは会社資産として取り扱います。',
          '【相談窓口】#support-ict へご連絡ください。'
        ]
      }
    ]
  },
  {
    id: 'hardware',
    title: 'ハードウェア・スキャナー',
    description: 'PC故障、モニター、複合機スキャナー設定',
    icon: '💻',
    options: [
      {
        id: 'scanner-manual',
        title: '複合機スキャナー利用マニュアル',
        steps: [
          '複合機のパネルから「スキャン送信」を選択します',
          '「送信先を追加」の隣にある「連絡帳マーク」を選択します',
          'T3や海岸など、自分のいる建物の設定を選択してスキャンを実行します',
          '【保存先】\\svfl01\\scanner\\建物名 にデータが保存されます',
          '【注意】スキャンデータは3日で自動的に削除されます。お早めに移動してください'
        ]
      },
      {
        id: 'monitor',
        title: 'モニターが映らない',
        steps: [
          '電源ケーブルが奥まで刺さっているか確認してください',
          'PC側のHDMI/USB-Cポートを差し直してください',
          'モニターの入力切替ボタン(Source)を数回押してください',
          'PCを再起動してください（これだけで直ることが多いです）'
        ]
      }
    ]
  },
  {
    id: 'network',
    title: 'ネットワーク・Wi-Fi',
    description: 'ネット接続、VPN、社内Wi-Fi(amanax)',
    icon: '🌐',
    options: [
      {
        id: 'wifi-win',
        title: 'Windows Wi-Fi (amanax) 接続手順',
        steps: [
          '【基本】社内(T3、海岸スタジオ)では「amanax」に自動接続されます',
          '【アイコン確認】地球儀マーク(未接続)、扇形マーク(Wi-Fi接続)、PC/プラグマーク(有線接続)',
          '【手動接続】タスクバー右下の「インターネットアクセス」をクリック',
          'Wi-Fiボタン横の「＞」をクリックし、「amanax」を選択して接続',
          '各自のIDとパスワードを入力してください'
        ]
      },
      {
        id: 'wifi-mac-amanax',
        title: 'Mac amanax 再設定・トラブル解決',
        steps: [
          '【1. 設定削除】システム設定のWi-Fiから既存の「amanax」を削除し、再設定を行ってください。',
          '【2. 情報入力】名:amanax / セキュリティ:WPA2エンタープライズ / モード:自動',
          '【3. ログイン】ユーザ名:メールの@より前 / パス:ログインパスワード',
          '【4. 重要設定】詳細から「プライベートWi-Fiアドレス」を「オフ」にしてください。',
          '【5. 証明書】キーチェーンアクセスで「amana.co.jp」を「常に信頼」に設定。'
        ]
      },
      {
        id: 'vpn-win',
        title: 'Windows VPN (Cisco AnyConnect)',
        steps: [
          '【接続】タスクバー右下の「⋀」からAnyConnectを選択し、「amanagroup2」で「Connect」',
          '【解除】「Disconnect」をクリック'
        ]
      },
      {
        id: 'vpn-mac',
        title: 'Mac VPN (Cisco AnyConnect)',
        steps: [
          '【接続】Launchpadから起動し、「amanagroup2」で「Connect」',
          '【解除】「Disconnect」をクリック'
        ]
      }
    ]
  },
  {
    id: 'software',
    title: 'ソフトウェア・アプリ',
    description: 'Slack, Teams, Zoom, Excelなど',
    icon: '🛠️',
    options: [
      {
        id: 'slack',
        title: 'Slack通知が来ない',
        steps: [
          '「おやすみモード」でないか確認してください',
          'PC本体の「通知設定」でSlackが許可されているか確認',
          'Slackアプリを「Ctrl + R」でリロードしてください'
        ]
      }
    ]
  }
];
