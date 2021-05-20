export interface MessagesDto {
  sender: string,
  receiver: string,
  message: string,
  createdAt: Date,
  productUid: string,
  productTitle: string,
  viewed: number,
}