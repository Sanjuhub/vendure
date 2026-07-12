import { graphql } from '@/vdb/graphql/graphql.js';

export const orderSummaryQuery = graphql(`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orderSummary(start: $start, end: $end) {
            totalOrders
            totalOrderValue
            currencyCode
        }
    }
`);
