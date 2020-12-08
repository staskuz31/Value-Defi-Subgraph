import { BigInt } from "@graphprotocol/graph-ts"
import {
  ValueLiquidityToken,
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  Deposit,
  Transfer,
  Withdrawal
} from "../generated/ValueLiquidityToken/ValueLiquidityToken"
import { _Approval, _DelegateChanged, _DelegateVotesChanged,
  _Deposit, _Transfer, _Withdrawal } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleDelegateChanged(event: DelegateChanged): void {
  let entity = _DelegateChanged.load(event.params.delegator.toHex())

  if (entity == null) {
    entity = new _DelegateChanged(event.params.delegator.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.delegator = event.params.delegator
  entity.fromDelegate = event.params.fromDelegate
  entity.toDelegate = event.params.toDelegate
  entity.save()
}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {
  let entity = _DelegateVotesChanged.load(event.params.delegate.toHex())

  if (entity == null) {
    entity = new _DelegateVotesChanged(event.params.delegate.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.delegate = event.params.delegate
  entity.previousBalance = event.params.previousBalance
  entity.newBalance = event.params.newBalance
  entity.save()
}

export function handleDeposit(event: Deposit): void {
  let entity = _Deposit.load(event.params.dst.toHex())

  if (entity == null) {
    entity = new _Deposit(event.params.dst.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.dst = event.params.dst
  entity.amount = event.params.amount
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleWithdrawal(event: Withdrawal): void {
  let entity = _Withdrawal.load(event.params.src.toHex())

  if (entity == null) {
    entity = new _Withdrawal(event.params.src.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.src = event.params.src
  entity.amount = event.params.amount
  entity.save()
}
