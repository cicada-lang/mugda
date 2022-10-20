(data Nat Type
  [zero Nat]
  [add1 (-> Nat Nat)])

(fn add (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add x y))])

;; add

;; (lambda-clauses
;;  (Pi ([_ (data Nat Type)]) (Pi ([_ (data Nat Type)]) (data Nat Type)))
;;  [(x (zero)) x]
;;  [(x (add1 y)) ((ctor add1 (Pi ([_ (data Nat Type)]) (data Nat Type))) ((add x) y))])

;; (zero)
(add (zero) (zero))

;; (add1 zero)
;; (add zero (add1 zero))
;; (add (add1 zero) zero)

;; (add (add1 zero) (add1 zero))
