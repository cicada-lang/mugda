(import "../../std/nat/index.mu" Nat zero add1)

(data NatPair () ()
  [pair ([left Nat] [right Nat]) NatPair])

(fn add-pair (-> NatPair Nat)
  [((pair (zero) right)) right]
  [((pair (add1 prev) right)) (add1 (add-pair (pair prev right)))])

(add-pair (pair zero zero))
(add-pair (pair (add1 zero) zero))
(add-pair (pair zero (add1 zero)))
(add-pair (pair (add1 zero) (add1 zero)))
