# blackjack

## ゲームの流れ

1. 金額を賭ける(bet)
   1, 5, 10, 30, ALLIN

2. カードを配る

3. アクション

   - surrender
   - stand(現在のハンドで勝負)
   - hit(手札に更に 1 枚カードを追加、21 を超えたら直ちに負け(bust))
   - double(ベットを 2 倍にしてもう一枚カードを引く、手札が 2 枚の状況でしかできない)

4. 評価

   - バストしていないプレイヤーとハンドを比較
   - ディーラーとハンドの強さが等しい場合ベットしたチップは失わない(push)
   - エースと絵札の組み合わせ(ブラックジャック)は(3,8,k)より強い
