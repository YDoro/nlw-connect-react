'use client'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}
export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInvite() {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2" onClick={copyInvite}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
