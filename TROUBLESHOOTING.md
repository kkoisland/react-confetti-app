# React Confetti トラブルシューティング

## 問題: 低重力時に粒子がまとまって落ちる

### 現象

`gravity`を0.02以下に設定すると、以下のような現象が発生します:
- 粒子がまとまって落ちる
- 途切れる
- また粒子がまとまって落ちる
- 画面全体に均等に広がらない

### 原因

react-confettiのデフォルト設定では:
- 発生源: 画面上部の高さ0pxのライン（`confettiSource: { x: 0, y: 0, w: window.innerWidth, h: 0 }`）
- 粒子は横幅いっぱいから発生するが、**縦方向には1本の線**から発生
- `initialVelocityY`のデフォルト値は10（下向き）で、粒子を縦方向に分散させる

低重力（`gravity < 0.02`）で`initialVelocityY`を0に設定した場合:
- 粒子に縦方向の初速がない
- 粒子が横に広がる前に縦に整列したまま落下
- 結果として「まとまって見える → 途切れる → またまとまって見える」というパターンになる

**重要:** `initialVelocityY`を明示的に0に設定すると、ライブラリのデフォルト値(10)が無効になり、問題が発生します。

### 解決策

#### 推奨: initialVelocityYで縦方向に分散させる

```tsx
<Confetti
  colors={["#FFFFFF", "#E0F2F7"]}
  numberOfPieces={300}
  gravity={0.01}
  initialVelocityY={-5}  // 負の値で上向きに初速を与える
/>
```

**仕組み:**
- `initialVelocityY`: 負の値 = 上向き、正の値 = 下向き
- `initialVelocityY={-5}`: 粒子を上向きに初速5で打ち上げ
- 重力により最終的には下向きに落下するが、**粒子が縦方向にバラける**

**注意:**
- 上向きの動きは一瞬（数フレーム）で、人間の目には見えないことが多い
- 最終的には重力で全て下に落ちるため、視覚的には「自然に降る」ように見える

#### 実装例

**Snow（雪）テーマ:**
```tsx
<Confetti
  colors={["#FFFFFF", "#E0F2F7"]}
  numberOfPieces={300}
  gravity={0.01}
  initialVelocityY={-5}
/>
```

**Sakura（桜）テーマ:**
```tsx
<Confetti
  colors={["#FFB7C5", "#FFC0CB"]}
  numberOfPieces={100}
  gravity={0.02}
  wind={0.01}
  initialVelocityY={-3}  // 桜は軽めの初速
/>
```

**Star（星）テーマ（問題が起きない例）:**
```tsx
<Confetti
  colors={["#DAA520", "#E8E8E8", "#E6BE8A"]}
  numberOfPieces={150}
  gravity={0.0005}
  initialVelocityY={-9}  // 強い上向き初速で打ち上げる
/>
```
星テーマは`initialVelocityY={-9}`で粒子を強く打ち上げるため、画面全体に分散して問題が発生しません。

### 効果がない解決策

以下の方法では**縦方向のまとまりは解消されません**:

❌ **numberOfPiecesを減らす**
```tsx
numberOfPieces={100}  // 粒子数を減らしても縦方向の整列は変わらない
```

❌ **recycle={false}を設定**
```tsx
recycle={false}  // 一度きりの降下にするだけで分散はしない
```

❌ **initialVelocityXを設定**
```tsx
initialVelocityX={3}  // 横方向に広げるだけで、縦方向のまとまりは残る
```

❌ **confettiSourceを広げる**
```tsx
confettiSource={{
  x: 0,
  y: 0,
  w: window.innerWidth,
  h: 100  // 発生源を広げても、初速がないと縦方向に整列したまま
}}
```

### ガイドライン

- **gravity ≥ 0.02**: `initialVelocityY`なしでも問題なし
- **gravity < 0.02**: `initialVelocityY`を負の値で設定（-3 〜 -9程度）
- **gravity ≤ 0.01**: より強い`initialVelocityY`が必要（-5 〜 -9程度）

## Frictionの適切な使い方

### 基本原則

- **デフォルト(0.99)を推奨**: ほとんどのケースで問題なし
- **Friction < 0.99**: 特殊な演出目的でのみ使用
- **単独で変更しない**: 必ず他のパラメータ（gravity、wind、initialVelocity）と組み合わせて調整

### 効果的な組み合わせ

**風に吹かれる演出:**
バラバラに風に吹かれている自然な動きが出る。

**高重力 + 低摩擦:**
素早く落下する演出。ただし途切れやすいので注意。

**バラつきのある演出:**
意図的に不規則な動きを作り出す。

### 注意事項

❌ **避けるべき組み合わせ:**
- `friction < 0.97` + `gravity < 0.05`: 途切れるリスク大
- `friction < 0.95` を単独で変更: 粒子が空中で固まる

✓ **安全な使い方:**
- Frictionを下げる場合は、Gravityを上げる（0.08以上）
- Windと組み合わせて自然な動きを作る
- 必ず実際に見て調整する

### 参考

- react-confetti公式: https://github.com/alampros/react-confetti
- initialVelocityYのデフォルト値: 10（下向き）
- frictionのデフォルト値: 0.99
- 座標系: Y軸は下向きが正（画面上部が0、下に行くほど値が大きくなる）
