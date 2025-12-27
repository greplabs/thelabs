export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  author: string
  content: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'human-ai-collaboration',
    title: 'Building GrepCoin: A Journey in Human-AI Collaboration',
    excerpt: 'How we built a complete crypto gaming platform through collaborative AI development. The challenges, breakthroughs, and lessons learned.',
    date: 'January 15, 2025',
    category: 'Development',
    readTime: '8 min read',
    author: 'GrepLabs Team',
    tags: ['AI', 'Development', 'GrepCoin', 'Web3'],
    content: `
GrepCoin wasn't just another crypto project—it was an experiment in how humans and AI agents could collaborate to build something truly innovative. This is the story of how we built it.

## The Vision

We started with a simple question: What if AI could help us build a complete gaming platform, from smart contracts to game mechanics? Not just code generation, but true collaboration where AI agents could think through problems, propose solutions, and iterate on designs.

The gaming industry has long struggled with the balance between fun gameplay and sustainable economics. Traditional play-to-earn models failed because they prioritized token speculation over actual enjoyment. We wanted to flip that equation.

## The Development Process

### Phase 1: Foundation (Weeks 1-4)

The first month focused on establishing our technical foundation:

- **Smart Contract Architecture**: We designed modular contracts on Base L2, leveraging its low gas fees and fast finality. The AI helped us identify potential security vulnerabilities and optimize gas consumption.

- **Base L2 Integration**: Choosing Base was strategic—it inherits Ethereum's security while offering the speed and cost-effectiveness needed for gaming transactions.

- **Tokenomics Modeling**: This is where AI collaboration really shined. We ran thousands of economic simulations, testing different token distribution models, reward curves, and burn mechanisms. The AI helped us identify equilibrium points and potential exploit vectors.

### Phase 2: Game Development (Weeks 5-10)

With the foundation set, we moved to the games themselves:

- **AI-Generated Game Mechanics**: We used AI to brainstorm game concepts, balance difficulty curves, and design progression systems. Each of our 9 arcade games went through dozens of iterations.

- **Arcade-Style Gameplay**: We deliberately chose arcade games for their timeless appeal. These aren't complex MMOs that require constant updates—they're simple, fun, and immediately accessible.

- **Guild and Tournament Systems**: Social features were essential. We built guild systems that let players form teams, compete in tournaments, and share rewards. The AI helped design matchmaking algorithms that ensure fair, competitive play.

### Phase 3: Launch and Beyond (Weeks 11-16)

- **Testing and Optimization**: Extensive playtesting with real users. We gathered feedback, fixed bugs, and refined the experience.

- **Community Onboarding**: Creating documentation, tutorials, and support systems to help new players get started.

- **Continuous Improvement**: The work doesn't stop at launch. We're constantly analyzing player behavior and adjusting the experience.

## Technical Deep Dive

### Smart Contract Architecture

Our contract structure prioritizes upgradeability and security:

\`\`\`solidity
// Simplified token reward distribution
contract GrepRewards {
    mapping(address => uint256) public playerScores;
    uint256 public rewardPool;

    function claimReward(uint256 score, bytes memory proof) external {
        require(verifyScore(score, proof), "Invalid score proof");
        uint256 reward = calculateReward(score);
        GREP.transfer(msg.sender, reward);
    }
}
\`\`\`

Key design decisions:
- **Separation of concerns**: Game logic, token logic, and governance are in separate contracts
- **Proxy patterns**: Allows us to fix bugs without migrating user data
- **Rate limiting**: Prevents reward farming and economic attacks

### Performance Optimization

Gaming requires low latency. We achieved sub-100ms response times through:
- Edge deployment with Vercel
- Optimistic UI updates
- WebSocket connections for real-time features
- Client-side game rendering with server-validated scores

## Lessons Learned

### What AI Excels At

1. **Exploring Solution Spaces**: When designing tokenomics, AI can run thousands of simulations faster than any human team.

2. **Pattern Recognition**: AI identified potential security issues by recognizing patterns from known exploits.

3. **Consistency**: AI maintains consistent coding styles and documentation across the entire codebase.

4. **Brainstorming**: Generating dozens of game concepts, mechanic variations, and feature ideas.

### Where Humans Add Value

1. **Strategic Decisions**: AI can present options, but humans must choose the direction that aligns with our values.

2. **Quality Judgment**: AI can generate code, but humans must evaluate whether it's good code.

3. **User Empathy**: Understanding what makes a game fun requires human intuition.

4. **Ethical Considerations**: Deciding how to handle edge cases that affect real people.

## The Result

GrepCoin launched with:
- 9 polished arcade games
- 500M GREP token supply
- Guild systems and tournaments
- Daily challenges and achievements
- No pay-to-win mechanics

Most importantly, players actually have fun. The token rewards are secondary to the gameplay itself—exactly as we intended.

## What's Next

We're continuing to expand the platform:
- More games based on community feedback
- Cross-game tournaments
- Mobile apps
- Expanded guild features

The journey of building GrepCoin taught us that AI isn't replacing human creativity—it's amplifying it. The best results come from genuine collaboration, where both humans and AI contribute their unique strengths.

---

*Want to try GrepCoin? Visit [grepcoin.io](https://grepcoin.io) and start playing today.*
    `,
  },
  {
    id: 'privacy-first-architecture',
    title: 'Designing Privacy-First Architecture',
    excerpt: 'Why local-first processing matters, and how we built Chai.im and Hippo with privacy as a core architectural principle, not an afterthought.',
    date: 'December 20, 2024',
    category: 'Architecture',
    readTime: '12 min read',
    author: 'GrepLabs Team',
    tags: ['Privacy', 'Architecture', 'Security', 'Local-First'],
    content: `
Privacy shouldn't be a feature—it should be fundamental to how systems are built. At GrepLabs, we design architecture with privacy at the core, not as an afterthought. This article explains our approach and why it matters.

## The Problem with Traditional Architecture

Most modern applications follow a simple pattern:
1. Collect user data
2. Send it to servers
3. Process it in the cloud
4. Return results

This model has serious problems:
- **Data breaches**: Centralized data stores are attractive targets
- **Surveillance**: Companies can analyze and monetize user behavior
- **Lock-in**: Your data lives on someone else's servers
- **Latency**: Every operation requires a network round-trip

## Our Core Principles

### 1. Local-First Processing

Process data on the user's device whenever possible. This isn't just about privacy—it's about performance and resilience.

**Benefits:**
- **Privacy**: Data never leaves your device
- **Speed**: No network latency
- **Offline**: Works without internet
- **Cost**: Reduced server infrastructure

**Implementation in Hippo:**

\`\`\`typescript
// Local vector embedding generation
async function indexFile(file: File) {
  // All processing happens locally
  const content = await extractText(file);
  const chunks = chunkText(content, 512);

  // Local AI model generates embeddings
  const embeddings = await localModel.embed(chunks);

  // Store in local SQLite database
  await localDb.insert('documents', {
    path: file.path,
    embeddings,
    metadata: extractMetadata(file)
  });
}
\`\`\`

### 2. End-to-End Encryption

When data must leave the device, encrypt it so only the intended recipient can read it.

**Chai.im's Signal Protocol Implementation:**

The Signal Protocol provides:
- **Perfect forward secrecy**: Compromising one key doesn't reveal past messages
- **Deniability**: You can't prove someone sent a specific message
- **Asynchronous**: Works even when recipients are offline

\`\`\`typescript
// Simplified encryption flow
async function sendMessage(recipient: string, plaintext: string) {
  // Get recipient's public key
  const recipientKey = await keyStore.getPublicKey(recipient);

  // Generate ephemeral key pair for this message
  const ephemeralKey = generateKeyPair();

  // Derive shared secret
  const sharedSecret = deriveSharedSecret(
    ephemeralKey.privateKey,
    recipientKey
  );

  // Encrypt with AES-256-GCM
  const ciphertext = encrypt(plaintext, sharedSecret);

  // Send encrypted message
  return {
    ephemeralPublic: ephemeralKey.publicKey,
    ciphertext,
    nonce: generateNonce()
  };
}
\`\`\`

### 3. Minimal Data Collection

Only collect what's absolutely necessary, and be transparent about what you collect.

**What we collect:**
- Anonymous usage metrics (opt-in)
- Crash reports (opt-in)
- Account email (for authentication only)

**What we don't collect:**
- Message content
- File contents
- Search queries
- Browsing history
- Contact lists

### 4. Transparency Through Open Source

Open source code ensures trust through verifiability. Anyone can audit our implementations and verify our privacy claims.

## Deep Dive: Chai.im Architecture

Chai.im is our enterprise encrypted messaging platform. Here's how privacy is baked into every layer:

### Message Flow

\`\`\`
┌──────────────┐     E2E Encrypted      ┌──────────────┐
│   Sender     │ ────────────────────→  │   Server     │
│   Device     │                        │  (Relay)     │
└──────────────┘                        └──────────────┘
       │                                       │
       │ Local AI                              │ Encrypted
       │ Processing                            │ Storage
       ▼                                       ▼
┌──────────────┐                        ┌──────────────┐
│   Summary    │                        │   Recipient  │
│   Generated  │                        │   Device     │
└──────────────┘                        └──────────────┘
\`\`\`

**Key Points:**
- Server never sees plaintext messages
- AI summaries generated locally
- Server only relays encrypted blobs
- Metadata minimized (no IP logging)

### Authentication: FIDO2/WebAuthn

We use hardware security keys and biometrics instead of passwords:

\`\`\`typescript
// Registration flow
async function registerDevice() {
  const credential = await navigator.credentials.create({
    publicKey: {
      challenge: serverChallenge,
      rp: { name: "Chai.im" },
      user: { id: userId, name: userEmail },
      pubKeyCredParams: [
        { type: "public-key", alg: -7 },  // ES256
        { type: "public-key", alg: -257 } // RS256
      ],
      authenticatorSelection: {
        authenticatorAttachment: "platform",
        userVerification: "required"
      }
    }
  });

  return sendToServer(credential);
}
\`\`\`

**Benefits:**
- No passwords to phish
- Hardware-bound credentials
- Biometric verification
- Resistant to credential stuffing

### HIPAA Compliance

For healthcare customers, we provide:
- Audit logging (encrypted)
- Access controls
- Message retention policies
- BAA agreements
- Compliance documentation

## Deep Dive: Hippo Architecture

Hippo is our local-first file organizer with AI-powered semantic search.

### Local Processing Pipeline

\`\`\`
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   File       │ ──→ │   Text       │ ──→ │   Vector     │
│   Watcher    │     │   Extractor  │     │   Embedding  │
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                                                 ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Search     │ ←── │   Query      │ ←── │   Local      │
│   Results    │     │   Engine     │     │   SQLite     │
└──────────────┘     └──────────────┘     └──────────────┘
\`\`\`

**Everything runs locally:**
- File watching (native OS APIs)
- Text extraction (Rust libraries)
- Vector embeddings (ONNX runtime)
- SQLite with vector extensions
- Search ranking algorithms

### Performance at Scale

Indexing 100K+ files requires optimization:

\`\`\`rust
// Batch processing for efficiency
async fn index_batch(files: Vec<PathBuf>) -> Result<()> {
    // Process files in parallel
    let embeddings: Vec<_> = files
        .par_iter()
        .map(|f| extract_and_embed(f))
        .collect();

    // Batch insert to SQLite
    let mut tx = db.begin_transaction()?;
    for (path, embedding) in files.iter().zip(embeddings) {
        tx.insert_document(path, embedding)?;
    }
    tx.commit()?;

    Ok(())
}
\`\`\`

**Results:**
- Initial indexing: ~1000 files/minute
- Incremental updates: <100ms
- Search latency: <50ms for 100K files

### Optional Encrypted Sync

For users who want cross-device access:

1. **Client-side encryption**: Files encrypted before upload
2. **Key derivation**: Master key derived from user password
3. **Zero-knowledge**: Server cannot decrypt files
4. **Selective sync**: Choose what to sync

## Beyond Privacy: Additional Benefits

### Performance

Local processing eliminates network latency:
- Hippo search: <50ms vs 500ms+ for cloud solutions
- Chai.im AI summaries: instant vs seconds of delay

### Reliability

Works offline:
- Hippo: Full functionality without internet
- Chai.im: Queue messages for later delivery

### Cost Efficiency

Reduced server infrastructure:
- Less cloud compute
- Less storage
- Lower bandwidth costs
- Savings passed to users

## Challenges and Trade-offs

### Device Storage

Local-first requires storage on user devices. We mitigate this with:
- Efficient compression
- Smart caching
- User-controlled retention

### Consistency

Without a central server, syncing is harder. Solutions:
- CRDTs for conflict resolution
- Vector clocks for ordering
- Eventual consistency model

### Recovery

If you lose your device, data could be lost. Options:
- Optional encrypted backup
- Multi-device sync
- Export/import tools

## Conclusion

Privacy-first architecture isn't just about protecting data—it's about building better software. By processing locally, encrypting everything, minimizing collection, and being transparent, we create products that are faster, more reliable, and more trustworthy.

The future of software is local-first. Join us in building it.

---

*Interested in our architecture? Check out our [open source repositories](https://github.com/greplabs) for implementation details.*
    `,
  },
  {
    id: 'open-source-business',
    title: 'The Open Source Business Model',
    excerpt: 'How we balance open-source ideals with sustainable business. Why core open source + freemium works, and how it funds innovation.',
    date: 'November 18, 2024',
    category: 'Business',
    readTime: '10 min read',
    author: 'GrepLabs Team',
    tags: ['Open Source', 'Business', 'Monetization', 'Strategy'],
    content: `
Building sustainable businesses around open source is challenging but not impossible. At GrepLabs, we've developed a model that funds continued development while staying true to open source values. Here's how it works.

## The Open Source Paradox

Open source software powers the modern internet. From Linux to Kubernetes, from React to TensorFlow, open source projects are the foundation of countless businesses. Yet many open source maintainers struggle financially.

The paradox: software worth billions to users often generates little revenue for creators.

## Failed Models

Before explaining our approach, let's examine models that often fail:

### Pure Open Source (No Revenue)
- Relies on donations or grants
- Maintainer burnout is common
- Projects often abandoned
- Examples: Many GitHub projects with thousands of stars but no funding

### Open Core (Crippled Free Version)
- Free version is intentionally limited
- Creates frustration and distrust
- Users feel manipulated
- Examples: Databases that disable essential features

### Dual Licensing (GPL + Commercial)
- Forces commercial users to pay
- Limits community adoption
- Legal complexity
- Examples: Some enterprise databases

### Cloud Exploitation
- Cloud providers profit from open source
- Original creators get nothing
- Led to license changes (SSPL, BSL)
- Examples: MongoDB, Elastic situation

## Our Model: Core Open Source + Freemium Premium

We take a different approach:

### The Core is Truly Free

Our core products are fully functional and open source:
- MIT or Apache 2.0 licensed
- No artificial limitations
- Full features for personal/small team use
- Can self-host forever for free

### Premium Adds Value, Not Restrictions

Premium features provide genuine additional value:
- Advanced AI capabilities
- Enterprise security features
- Cloud sync and backup
- Priority support
- Team collaboration tools

The key difference: the free version isn't crippled—it's complete for its use case.

## Why This Works

### 1. Trust Through Transparency

When code is open source, users can:
- Verify security claims
- Audit privacy practices
- Ensure no hidden telemetry
- Fork if they disagree with direction

This trust is invaluable, especially for privacy-focused products.

### 2. Community Innovation

Open source enables:
- Bug reports from thousands of users
- Community-contributed features
- Security researchers finding vulnerabilities
- Translations and internationalization

A single company could never match this reach.

### 3. Market Education

The free tier:
- Lets users try before committing
- Builds familiarity and trust
- Creates organic adoption
- Reduces sales friction

### 4. Sustainable Revenue

Premium features fund:
- Full-time developers
- Infrastructure costs
- Security audits
- Documentation and support

## Product-by-Product Breakdown

### Shields AI

**Free (Open Source):**
- Core DNS filtering
- Basic blocklists
- 5 devices
- Community blocklists
- Self-hosted option

**Premium:**
- AI threat detection
- Unlimited devices
- Family management
- Advanced analytics
- Custom rules
- Enterprise integrations
- Priority support

**Why it works:** The free tier is genuinely useful for individuals. Families and businesses need the additional features.

### Hippo

**Free (Open Source):**
- Local file indexing
- Basic search
- 10K file limit
- Manual tagging
- Core UI

**Premium:**
- Unlimited files
- AI semantic search
- Cloud sync (encrypted)
- Auto-tagging
- Team sharing
- API access

**Why it works:** Power users and teams need the scale and collaboration features.

### Chai.im

**Free (Open Source):**
- Secure messaging (E2E encrypted)
- 1-on-1 conversations
- Small groups (10 members)
- Basic features
- Self-hosted option

**Premium:**
- Unlimited groups
- AI summaries and search
- Cloud backup
- HIPAA compliance tools
- Enterprise SSO
- Audit logging

**Why it works:** Regulated industries and enterprises need compliance features.

### GrepCoin

**Free (Open Source):**
- All games playable
- Basic rewards
- Community features
- Core gameplay

**Premium (Battle Pass):**
- Enhanced rewards
- Exclusive content
- Tournament access
- Cosmetic items

**Why it works:** Games are fun without payment; premium enhances the experience.

## Revenue Allocation

We're transparent about where money goes:

| Category | Percentage |
|----------|------------|
| Product Development | 30% |
| Infrastructure | 20% |
| Marketing | 20% |
| Open Source Support | 10% |
| Customer Support | 10% |
| Legal/Compliance | 5% |
| Reserves | 5% |

Note: 10% goes directly back to open source—contributor bounties, community events, and grants.

## Challenges We Face

### Competing with Free

When your core is free, you compete against yourself. Solutions:
- Premium features must provide clear value
- Target different segments (individual vs. enterprise)
- Focus on convenience, not restrictions

### Cloud Hosting Competition

Large cloud providers could host our software. Our approach:
- Focus on features they can't replicate (AI, support)
- Build community loyalty
- Move faster than they can copy

### Sustainable Pricing

Pricing must be:
- Affordable enough for adoption
- High enough to fund development
- Competitive with alternatives

### Balancing Openness

Sometimes there's tension between:
- What users want open sourced
- What funds development

We err toward openness, but must remain sustainable.

## Lessons for Other Projects

If you're building an open source business:

### Do:
- Make the free version genuinely useful
- Focus premium on enterprise/scale features
- Be transparent about finances
- Invest in community
- Consider compliance needs (they pay well)

### Don't:
- Cripple the free version
- Hide code that could be audited
- Ignore community feedback
- Over-monetize too early
- Forget why people chose open source

## The Future

We believe the future of software is:
- **Open by default**: Trust through transparency
- **Local-first**: Privacy through architecture
- **Community-driven**: Innovation through collaboration
- **Sustainably funded**: Premium features that matter

GrepLabs is proving this model works. Join us.

## Conclusion

Open source and sustainable business aren't mutually exclusive. By providing genuine value in both free and premium tiers, being transparent about finances, and investing in community, we can build software that's both open and financially sustainable.

The key is remembering why open source matters: trust, transparency, and community. Any business model that undermines these values isn't worth pursuing.

---

*Want to support open source development? Check out our [funding page](/fund) or contribute to our [GitHub repositories](https://github.com/greplabs).*
    `,
  },
  {
    id: 'shields-ai-deep-dive',
    title: 'Shields AI: Building Sub-Millisecond DNS Security',
    excerpt: 'The technical journey behind our ML-powered DNS protection. From eBPF packet processing to real-time threat detection.',
    date: 'October 15, 2024',
    category: 'Infrastructure',
    readTime: '15 min read',
    author: 'GrepLabs Team',
    tags: ['DNS', 'Security', 'Machine Learning', 'Performance', 'Rust'],
    content: `
DNS is the phonebook of the internet—and a prime target for attackers. Shields AI provides intelligent DNS security with machine learning threat detection and sub-millisecond latency. Here's how we built it.

## The Challenge

DNS security must be:
1. **Fast**: Every website load starts with DNS
2. **Accurate**: Block threats, not legitimate sites
3. **Intelligent**: Detect new threats automatically
4. **Private**: Don't log or sell query data

Traditional approaches fail on at least one dimension.

## Architecture Overview

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                        Shields AI                            │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────┐    ┌───────────┐    ┌───────────┐           │
│  │   eBPF    │───→│   Rust    │───→│    ML     │           │
│  │  Capture  │    │  Filter   │    │  Engine   │           │
│  └───────────┘    └───────────┘    └───────────┘           │
│        │                │                │                   │
│        ▼                ▼                ▼                   │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐           │
│  │  Packet   │    │  Block    │    │  Threat   │           │
│  │  Stats    │    │  Lists    │    │  Score    │           │
│  └───────────┘    └───────────┘    └───────────┘           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Layer 1: High-Performance Packet Processing

DNS queries arrive as UDP packets. We need to process them with minimal latency.

### eBPF for Zero-Copy Processing

eBPF (extended Berkeley Packet Filter) lets us process packets in the kernel:

\`\`\`c
// Simplified eBPF DNS parser
SEC("xdp")
int dns_filter(struct xdp_md *ctx) {
    void *data = (void *)(long)ctx->data;
    void *data_end = (void *)(long)ctx->data_end;

    // Parse Ethernet header
    struct ethhdr *eth = data;
    if ((void *)(eth + 1) > data_end)
        return XDP_PASS;

    // Parse IP header
    struct iphdr *ip = (void *)(eth + 1);
    if ((void *)(ip + 1) > data_end)
        return XDP_PASS;

    // Check for UDP port 53 (DNS)
    if (ip->protocol != IPPROTO_UDP)
        return XDP_PASS;

    struct udphdr *udp = (void *)(ip + 1);
    if (udp->dest != htons(53))
        return XDP_PASS;

    // Extract domain name and check blocklist
    struct dns_header *dns = (void *)(udp + 1);
    if (is_blocked(dns->qname))
        return XDP_DROP;  // Block in kernel

    return XDP_PASS;  // Allow to userspace
}
\`\`\`

**Benefits:**
- Packet processing in kernel space
- No context switches for blocked domains
- Microsecond-level latency
- Can handle millions of packets/second

### Rust for Safety and Speed

Beyond eBPF, our userspace processing is in Rust:

\`\`\`rust
use std::net::UdpSocket;
use tokio::sync::mpsc;

async fn dns_server(blocklist: Arc<BlockList>, ml_engine: Arc<MlEngine>) {
    let socket = UdpSocket::bind("0.0.0.0:53").unwrap();
    let mut buf = [0u8; 512];

    loop {
        let (len, src) = socket.recv_from(&mut buf).await?;

        // Parse DNS query
        let query = DnsQuery::parse(&buf[..len])?;

        // Check blocklist (O(1) hash lookup)
        if blocklist.contains(&query.domain) {
            socket.send_to(&blocked_response(&query), src).await?;
            continue;
        }

        // ML threat scoring (async, doesn't block)
        let threat_score = ml_engine.score(&query).await;
        if threat_score > THRESHOLD {
            log_threat(&query, threat_score);
            socket.send_to(&blocked_response(&query), src).await?;
            continue;
        }

        // Forward to upstream DNS
        let response = forward_query(&query).await?;
        socket.send_to(&response, src).await?;
    }
}
\`\`\`

## Layer 2: Intelligent Blocklists

Static blocklists are the first line of defense.

### Blocklist Architecture

\`\`\`rust
pub struct BlockList {
    // Hash set for exact domain matching
    exact: HashSet<String>,

    // Aho-Corasick automaton for pattern matching
    patterns: AhoCorasick,

    // Bloom filter for quick negative lookups
    bloom: BloomFilter,

    // Categories for fine-grained control
    categories: HashMap<Category, HashSet<String>>,
}

impl BlockList {
    pub fn contains(&self, domain: &str) -> bool {
        // Quick bloom filter check (false = definitely not blocked)
        if !self.bloom.might_contain(domain) {
            return false;
        }

        // Exact match check
        if self.exact.contains(domain) {
            return true;
        }

        // Pattern matching for wildcards
        self.patterns.is_match(domain)
    }
}
\`\`\`

### Blocklist Sources

We aggregate from multiple sources:
- Community blocklists (updated hourly)
- Threat intelligence feeds
- User-reported domains
- ML-identified threats

Total: 5M+ domains across categories:
- Malware & phishing
- Advertising & tracking
- Adult content
- Social media (optional)
- Gambling (optional)

## Layer 3: Machine Learning Threat Detection

Static blocklists can't catch new threats. Our ML engine identifies suspicious domains in real-time.

### Feature Extraction

\`\`\`python
def extract_features(domain: str) -> np.ndarray:
    features = []

    # Lexical features
    features.append(len(domain))
    features.append(domain.count('.'))
    features.append(entropy(domain))
    features.append(consonant_ratio(domain))
    features.append(digit_ratio(domain))

    # N-gram analysis
    bigrams = extract_ngrams(domain, 2)
    features.extend(ngram_frequency(bigrams))

    # Domain age (from WHOIS)
    features.append(domain_age_days(domain))

    # TLD risk score
    features.append(tld_risk_score(domain))

    # Similarity to known malicious patterns
    features.append(malware_similarity_score(domain))

    return np.array(features)
\`\`\`

### Model Architecture

We use an ensemble of models:

1. **Random Forest**: Fast, interpretable
2. **XGBoost**: High accuracy
3. **Neural Network**: Complex pattern detection

\`\`\`python
class ThreatEnsemble:
    def __init__(self):
        self.rf = RandomForestClassifier(n_estimators=100)
        self.xgb = XGBClassifier()
        self.nn = load_model('threat_nn.h5')

    def predict(self, features: np.ndarray) -> float:
        # Get predictions from each model
        rf_pred = self.rf.predict_proba(features)[0][1]
        xgb_pred = self.xgb.predict_proba(features)[0][1]
        nn_pred = self.nn.predict(features)[0][0]

        # Weighted ensemble
        return 0.3 * rf_pred + 0.4 * xgb_pred + 0.3 * nn_pred
\`\`\`

### Training Data

Our models train on:
- 10M+ known malicious domains
- 50M+ legitimate domains
- Daily updates with new threats
- Feedback from user reports

### Real-Time Inference

ML inference must not slow down DNS:

\`\`\`rust
// Async ML scoring doesn't block DNS response
async fn score_domain(domain: &str) -> f32 {
    // Check cache first
    if let Some(score) = ML_CACHE.get(domain) {
        return score;
    }

    // Extract features (fast)
    let features = extract_features(domain);

    // Run inference (uses ONNX runtime for speed)
    let score = ML_MODEL.run(&features);

    // Cache result
    ML_CACHE.insert(domain, score);

    score
}
\`\`\`

Average inference time: <1ms

## Performance Results

### Latency

| Operation | Time |
|-----------|------|
| Blocklist lookup | <100μs |
| ML inference | <1ms |
| Total query time | <2ms |
| End-to-end (with upstream) | <10ms |

### Throughput

| Metric | Value |
|--------|-------|
| Queries per second | 100,000+ |
| Concurrent connections | 10,000+ |
| Memory usage | <500MB |
| CPU usage (at 50K QPS) | ~30% |

### Accuracy

| Metric | Value |
|--------|-------|
| Malware detection rate | 99.2% |
| False positive rate | 0.01% |
| Phishing detection rate | 98.7% |
| Tracker blocking rate | 99.9% |

## Privacy by Design

### What We Log

- Aggregate query counts (no domains)
- Blocked category statistics
- Performance metrics

### What We Don't Log

- Individual domains queried
- IP addresses
- User identifiers
- Query timestamps

### Zero-Knowledge Architecture

\`\`\`
User Query → Shields AI → Response
                ↓
         Statistics only:
         - "Blocked 47 ads today"
         - "Protected from 3 threats"
         - No specific domains stored
\`\`\`

## Deployment Options

### Cloud (Default)
- Managed infrastructure
- Global edge network
- Automatic updates
- No maintenance required

### Self-Hosted
- Full source code available
- Docker/Kubernetes deployment
- Your infrastructure, your rules
- Same features, local control

### Hybrid
- Cloud for threat intelligence
- Local for query processing
- Best of both worlds

## Future Roadmap

### Short-term
- IPv6 optimization
- QUIC/HTTP3 support
- Mobile apps

### Medium-term
- Browser extensions
- Router integrations
- Threat sharing network

### Long-term
- Federated threat detection
- Decentralized blocklists
- Hardware appliances

## Conclusion

Building DNS security that's both fast and intelligent requires careful engineering at every layer. By combining eBPF for kernel-level processing, Rust for safe and fast userspace code, and machine learning for threat detection, we've created a system that protects users without compromising performance or privacy.

The result: sub-millisecond DNS security that catches 99%+ of threats while maintaining complete privacy.

---

*Ready to protect your network? Check out [Shields AI](/products/shields) and get started for free.*
    `,
  },
  {
    id: 'local-ai-processing',
    title: 'Local AI Processing: Privacy Without Sacrifice',
    excerpt: 'Bringing powerful AI capabilities to your device. How we use WebAssembly and local models to deliver intelligent features without data collection.',
    date: 'September 10, 2024',
    category: 'AI/ML',
    readTime: '11 min read',
    author: 'GrepLabs Team',
    tags: ['AI', 'Privacy', 'WebAssembly', 'Local-First'],
    content: `
Cloud AI is powerful but comes with a cost: your data leaves your device and goes to someone else's servers. At GrepLabs, we've built AI features that run entirely locally. Here's how we make it work without sacrificing capability.

## The Cloud AI Problem

When you use cloud AI services, you typically:
1. Send your data to remote servers
2. Trust the provider with your information
3. Accept latency from network round-trips
4. Pay per API call

For privacy-conscious users and enterprises, this is unacceptable for sensitive data.

## Our Approach: Local AI

We run AI models directly on your device:
- **No data transmission**: Your information never leaves your device
- **No API costs**: Use as much as you want
- **No latency**: Instant responses
- **Works offline**: No internet required

## Technical Implementation

### WebAssembly for Cross-Platform Execution

WebAssembly (Wasm) lets us run high-performance code in browsers and native apps:

\`\`\`typescript
// Loading a Wasm ML model
async function loadModel() {
  const wasmModule = await WebAssembly.instantiate(
    await fetch('/models/embedding.wasm'),
    { env: { memory: new WebAssembly.Memory({ initial: 256 }) } }
  );

  return {
    embed: (text: string) => {
      const encoder = new TextEncoder();
      const bytes = encoder.encode(text);

      // Copy input to Wasm memory
      const inputPtr = wasmModule.exports.allocate(bytes.length);
      new Uint8Array(wasmModule.exports.memory.buffer)
        .set(bytes, inputPtr);

      // Run inference
      const outputPtr = wasmModule.exports.embed(inputPtr, bytes.length);

      // Read output embeddings
      return new Float32Array(
        wasmModule.exports.memory.buffer,
        outputPtr,
        384  // embedding dimension
      );
    }
  };
}
\`\`\`

### ONNX Runtime for Model Execution

ONNX (Open Neural Network Exchange) provides a standard format that runs anywhere:

\`\`\`typescript
import * as ort from 'onnxruntime-web';

class LocalEmbedding {
  private session: ort.InferenceSession | null = null;

  async initialize() {
    // Load model from local file
    this.session = await ort.InferenceSession.create(
      '/models/all-MiniLM-L6-v2.onnx',
      {
        executionProviders: ['wasm'],  // or 'webgl' for GPU
        graphOptimizationLevel: 'all'
      }
    );
  }

  async embed(text: string): Promise<number[]> {
    // Tokenize input
    const tokens = this.tokenize(text);

    // Create input tensors
    const inputTensor = new ort.Tensor('int64', tokens, [1, tokens.length]);
    const attentionMask = new ort.Tensor(
      'int64',
      new Array(tokens.length).fill(1),
      [1, tokens.length]
    );

    // Run inference
    const results = await this.session!.run({
      input_ids: inputTensor,
      attention_mask: attentionMask
    });

    // Return embeddings
    return Array.from(results.embeddings.data as Float32Array);
  }
}
\`\`\`

### Quantized Models for Efficiency

Full-precision models are too large for local execution. We use quantization:

| Model | Original Size | Quantized Size | Accuracy Loss |
|-------|---------------|----------------|---------------|
| Embedding (384d) | 90MB | 23MB | <1% |
| Text Classification | 440MB | 110MB | <2% |
| Summarization | 1.2GB | 300MB | <3% |

\`\`\`python
# Quantization process
import onnx
from onnxruntime.quantization import quantize_dynamic

# Load original model
model = onnx.load('model.onnx')

# Apply dynamic quantization
quantize_dynamic(
    'model.onnx',
    'model_quantized.onnx',
    weight_type=QuantType.QInt8,
    per_channel=True
)
\`\`\`

## Use Cases in Our Products

### Hippo: Semantic File Search

\`\`\`typescript
// Indexing files with local embeddings
async function indexFile(file: File, model: LocalEmbedding) {
  // Extract text content
  const content = await extractText(file);

  // Split into chunks for embedding
  const chunks = splitIntoChunks(content, 512);

  // Generate embeddings locally
  const embeddings = await Promise.all(
    chunks.map(chunk => model.embed(chunk))
  );

  // Store in local vector database
  await vectorDb.upsert({
    id: file.path,
    embeddings,
    metadata: { name: file.name, type: file.type }
  });
}

// Searching with natural language
async function search(query: string, model: LocalEmbedding) {
  // Embed query locally
  const queryEmbedding = await model.embed(query);

  // Find similar documents
  const results = await vectorDb.search(queryEmbedding, { topK: 10 });

  return results;
}
\`\`\`

### Chai.im: Local Message Summaries

\`\`\`typescript
// Summarize conversation without cloud
async function summarizeThread(messages: Message[]) {
  const model = await loadSummarizationModel();

  // Combine messages into context
  const context = messages
    .map(m => \`\${m.sender}: \${m.text}\`)
    .join('\\n');

  // Generate summary locally
  const summary = await model.summarize(context, {
    maxLength: 150,
    minLength: 50
  });

  return summary;
}
\`\`\`

### Shields AI: ML Threat Detection

\`\`\`typescript
// Threat detection runs locally
async function scoreDomain(domain: string) {
  const model = await loadThreatModel();

  // Extract domain features
  const features = extractDomainFeatures(domain);

  // Run inference locally
  const [score] = await model.predict(features);

  return score;  // 0.0 - 1.0 threat probability
}
\`\`\`

## Performance Optimizations

### 1. Model Caching

\`\`\`typescript
const modelCache = new Map<string, any>();

async function getModel(name: string) {
  if (modelCache.has(name)) {
    return modelCache.get(name);
  }

  const model = await loadModel(name);
  modelCache.set(name, model);
  return model;
}
\`\`\`

### 2. Batch Processing

\`\`\`typescript
// Process multiple inputs efficiently
async function embedBatch(texts: string[], model: LocalEmbedding) {
  // Batch size depends on device memory
  const batchSize = 32;
  const results: number[][] = [];

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    const embeddings = await model.embedBatch(batch);
    results.push(...embeddings);
  }

  return results;
}
\`\`\`

### 3. Web Worker Offloading

\`\`\`typescript
// Run inference in background thread
const worker = new Worker('/workers/ml-worker.js');

function inferenceAsync(input: any): Promise<any> {
  return new Promise((resolve) => {
    const id = crypto.randomUUID();

    worker.postMessage({ id, input });

    worker.onmessage = (e) => {
      if (e.data.id === id) {
        resolve(e.data.result);
      }
    };
  });
}
\`\`\`

### 4. GPU Acceleration (WebGL/WebGPU)

\`\`\`typescript
// Use GPU when available
const session = await ort.InferenceSession.create(modelPath, {
  executionProviders: [
    'webgpu',  // Best performance
    'webgl',   // Good fallback
    'wasm'     // Universal fallback
  ]
});
\`\`\`

## Benchmarks

### Embedding Generation

| Platform | Model | Time per Text | Memory |
|----------|-------|---------------|--------|
| MacBook Pro M2 | MiniLM-L6 | 8ms | 150MB |
| iPhone 14 | MiniLM-L6 | 25ms | 120MB |
| Chrome (Desktop) | MiniLM-L6 | 15ms | 200MB |
| Firefox (Desktop) | MiniLM-L6 | 18ms | 200MB |

### Summarization

| Platform | Input Length | Time | Memory |
|----------|-------------|------|--------|
| MacBook Pro M2 | 1000 tokens | 2.5s | 400MB |
| Desktop Chrome | 1000 tokens | 4.0s | 500MB |

### Threat Classification

| Platform | Queries/sec | Memory |
|----------|-------------|--------|
| Rust (Native) | 50,000 | 50MB |
| Wasm (Browser) | 10,000 | 100MB |

## Limitations and Trade-offs

### What Works Well Locally

- Text embeddings (semantic search)
- Classification (spam, threats)
- Short summarization
- Entity extraction
- Sentiment analysis

### What Still Needs Cloud (For Now)

- Large language model chat (GPT-4 scale)
- Image generation
- Long document analysis
- Complex reasoning

### Trade-offs

| Aspect | Local AI | Cloud AI |
|--------|----------|----------|
| Privacy | Excellent | Depends on provider |
| Latency | Very low | Variable |
| Cost | One-time load | Per-request |
| Capability | Limited by device | Unlimited |
| Offline | Yes | No |
| Updates | Manual | Automatic |

## Future Directions

### More Capable Local Models

- Quantized LLMs (Llama 2 7B runs on phones)
- Smaller, specialized models
- Better WebGPU support

### On-Device Training

- Personalized models without data leaving device
- Federated learning approaches
- Continuous improvement from usage

### Hardware Acceleration

- Apple Neural Engine support
- Android NPU utilization
- WebNN standard adoption

## Conclusion

Local AI processing lets us deliver intelligent features without compromising privacy. By using WebAssembly, ONNX Runtime, and quantized models, we run powerful AI directly on your device—no cloud required.

The technology continues to improve. Every year, we can run more capable models locally. The future is local-first AI.

---

*Experience local AI yourself with [Hippo](/products/hippo) or [Chai.im](/products/chai).*
    `,
  },
  {
    id: 'hippo-semantic-search',
    title: 'Hippo: Building Semantic Search for 100K+ Files',
    excerpt: 'How we built a file organizer that understands meaning, not just keywords. Vector embeddings, local processing, and instant results.',
    date: 'August 5, 2024',
    category: 'Technology',
    readTime: '13 min read',
    author: 'GrepLabs Team',
    tags: ['Search', 'Vector Database', 'AI', 'Local-First', 'Rust'],
    content: `
Traditional file search is broken. You type keywords and hope for the best. Hippo is different—it understands what you're looking for, even if you don't use the exact words. Here's how we built semantic search that works across 100,000+ files with sub-100ms latency.

## The Problem with Keyword Search

You have a file called "Q3 Financial Report.pdf" but search for "third quarter revenue"—no results. You look for "meeting notes from Sarah" but the file is named "2024-03-15-standup.md"—nothing.

Keyword search fails because:
- It matches strings, not meaning
- You must remember exact file names
- Related documents don't surface
- Synonyms don't work

## Semantic Search: Understanding Meaning

Semantic search transforms both your query and documents into numerical representations (embeddings) that capture meaning. Similar concepts have similar embeddings, regardless of exact words used.

\`\`\`
"Q3 revenue"          →  [0.23, -0.15, 0.87, ...]
"third quarter sales" →  [0.25, -0.14, 0.89, ...]  ← Similar!
"vacation photos"     →  [0.91, 0.32, -0.45, ...]  ← Different
\`\`\`

## Hippo's Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                       Hippo Desktop                          │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────┐    ┌───────────┐    ┌───────────┐           │
│  │   File    │───→│   Text    │───→│  Vector   │           │
│  │  Watcher  │    │  Extract  │    │ Embedding │           │
│  └───────────┘    └───────────┘    └───────────┘           │
│                                           │                  │
│                                           ▼                  │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐           │
│  │  Search   │←───│   HNSW    │←───│  SQLite   │           │
│  │    UI     │    │   Index   │    │  + VSS    │           │
│  └───────────┘    └───────────┘    └───────────┘           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Component 1: File Watcher

We use native OS APIs to detect file changes in real-time:

\`\`\`rust
use notify::{Watcher, RecursiveMode, watcher};

fn watch_directory(path: &Path, tx: Sender<FileEvent>) {
    let mut watcher = watcher(tx, Duration::from_secs(1)).unwrap();

    watcher.watch(path, RecursiveMode::Recursive).unwrap();

    // Events trigger indexing pipeline
    // - FileEvent::Create → Index new file
    // - FileEvent::Modify → Re-index
    // - FileEvent::Delete → Remove from index
}
\`\`\`

### Component 2: Text Extraction

Different file types need different extractors:

\`\`\`rust
fn extract_text(path: &Path) -> Result<String> {
    let extension = path.extension().unwrap_or_default();

    match extension.to_str() {
        Some("pdf") => extract_pdf(path),
        Some("docx") => extract_docx(path),
        Some("md") | Some("txt") => read_text(path),
        Some("html") => extract_html(path),
        Some("xlsx") => extract_excel(path),
        Some("pptx") => extract_powerpoint(path),
        Some("jpg") | Some("png") => ocr_image(path),
        _ => Err(UnsupportedFormat)
    }
}

// PDF extraction with poppler
fn extract_pdf(path: &Path) -> Result<String> {
    let doc = poppler::Document::from_file(path)?;
    let mut text = String::new();

    for i in 0..doc.n_pages() {
        let page = doc.page(i)?;
        text.push_str(&page.text()?);
        text.push('\\n');
    }

    Ok(text)
}
\`\`\`

### Component 3: Vector Embeddings

We use a local embedding model (no cloud required):

\`\`\`rust
use ort::{Session, Environment};

struct EmbeddingModel {
    session: Session,
    tokenizer: Tokenizer,
}

impl EmbeddingModel {
    fn new() -> Self {
        let environment = Environment::builder()
            .with_name("hippo")
            .build()
            .unwrap();

        let session = Session::builder(&environment)
            .with_model_from_file("models/all-MiniLM-L6-v2.onnx")
            .unwrap();

        Self {
            session,
            tokenizer: Tokenizer::from_file("models/tokenizer.json"),
        }
    }

    fn embed(&self, text: &str) -> Vec<f32> {
        // Tokenize
        let encoding = self.tokenizer.encode(text, true).unwrap();

        // Prepare input tensors
        let input_ids: Vec<i64> = encoding.get_ids()
            .iter()
            .map(|&x| x as i64)
            .collect();

        // Run inference
        let outputs = self.session.run(vec![
            Array::from_shape_vec((1, input_ids.len()), input_ids).unwrap(),
        ]).unwrap();

        // Mean pooling
        mean_pool(&outputs[0])
    }
}
\`\`\`

### Component 4: Vector Storage with SQLite

We store embeddings in SQLite with the vector search extension:

\`\`\`rust
use rusqlite::{Connection, params};

fn create_schema(conn: &Connection) {
    conn.execute_batch("
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY,
            path TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            content TEXT,
            embedding BLOB NOT NULL,
            created_at INTEGER,
            modified_at INTEGER,
            file_type TEXT,
            file_size INTEGER
        );

        CREATE INDEX IF NOT EXISTS idx_path ON documents(path);
        CREATE INDEX IF NOT EXISTS idx_type ON documents(file_type);
    ").unwrap();
}

fn insert_document(
    conn: &Connection,
    path: &str,
    content: &str,
    embedding: &[f32]
) {
    let embedding_bytes: Vec<u8> = embedding
        .iter()
        .flat_map(|f| f.to_le_bytes())
        .collect();

    conn.execute(
        "INSERT OR REPLACE INTO documents
         (path, name, content, embedding, modified_at)
         VALUES (?1, ?2, ?3, ?4, ?5)",
        params![
            path,
            Path::new(path).file_name().unwrap().to_str(),
            content,
            embedding_bytes,
            SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs()
        ],
    ).unwrap();
}
\`\`\`

### Component 5: HNSW Index for Fast Search

For 100K+ documents, we need efficient approximate nearest neighbor search:

\`\`\`rust
use hnsw::{Hnsw, SearchResult};

struct VectorIndex {
    hnsw: Hnsw<f32, DistCosine>,
    id_to_path: HashMap<usize, String>,
}

impl VectorIndex {
    fn new() -> Self {
        Self {
            hnsw: Hnsw::new(16, 200, 12, 200, DistCosine),
            id_to_path: HashMap::new(),
        }
    }

    fn add(&mut self, id: usize, path: String, embedding: Vec<f32>) {
        self.hnsw.insert(embedding, id);
        self.id_to_path.insert(id, path);
    }

    fn search(&self, query: &[f32], k: usize) -> Vec<SearchResult> {
        let results = self.hnsw.search(query, k, 200);

        results
            .into_iter()
            .map(|r| SearchResult {
                path: self.id_to_path[&r.id].clone(),
                score: 1.0 - r.distance,  // Convert distance to similarity
            })
            .collect()
    }
}
\`\`\`

## Chunking Strategy

Long documents need to be split into chunks for effective embedding:

\`\`\`rust
fn chunk_document(text: &str, chunk_size: usize, overlap: usize) -> Vec<String> {
    let words: Vec<&str> = text.split_whitespace().collect();
    let mut chunks = Vec::new();

    let mut start = 0;
    while start < words.len() {
        let end = (start + chunk_size).min(words.len());
        let chunk = words[start..end].join(" ");
        chunks.push(chunk);

        start += chunk_size - overlap;
    }

    chunks
}

// For a 10-page PDF:
// - Chunk size: 512 tokens (~400 words)
// - Overlap: 50 tokens
// - Results in ~25-30 chunks per document
\`\`\`

## Search Algorithm

\`\`\`rust
struct SearchEngine {
    model: EmbeddingModel,
    index: VectorIndex,
    db: Connection,
}

impl SearchEngine {
    fn search(&self, query: &str, limit: usize) -> Vec<SearchResult> {
        // 1. Embed the query
        let query_embedding = self.model.embed(query);

        // 2. Find similar chunks via HNSW
        let candidates = self.index.search(&query_embedding, limit * 3);

        // 3. Deduplicate by document
        let unique_docs = deduplicate_by_path(&candidates);

        // 4. Re-rank with full document context
        let ranked = self.rerank(&query, &unique_docs);

        // 5. Return top results
        ranked.into_iter().take(limit).collect()
    }

    fn rerank(&self, query: &str, docs: &[Document]) -> Vec<SearchResult> {
        // Simple TF-IDF boost for exact matches
        docs.iter().map(|doc| {
            let semantic_score = doc.similarity;
            let keyword_boost = if doc.content.contains(query) { 0.1 } else { 0.0 };

            SearchResult {
                path: doc.path.clone(),
                score: semantic_score + keyword_boost,
            }
        }).collect()
    }
}
\`\`\`

## Performance Optimizations

### 1. Incremental Indexing

Only index changed files:

\`\`\`rust
fn should_index(path: &Path, db: &Connection) -> bool {
    let modified = fs::metadata(path)
        .unwrap()
        .modified()
        .unwrap();

    let stored_time: Option<u64> = db.query_row(
        "SELECT modified_at FROM documents WHERE path = ?",
        [path.to_str()],
        |row| row.get(0)
    ).ok();

    match stored_time {
        Some(t) => modified > UNIX_EPOCH + Duration::from_secs(t),
        None => true,  // New file
    }
}
\`\`\`

### 2. Batch Processing

\`\`\`rust
async fn index_batch(files: Vec<PathBuf>) -> Result<()> {
    // Process in parallel
    let results: Vec<_> = files
        .par_iter()
        .filter_map(|f| {
            let text = extract_text(f).ok()?;
            let chunks = chunk_document(&text, 512, 50);
            let embeddings: Vec<_> = chunks
                .iter()
                .map(|c| model.embed(c))
                .collect();
            Some((f, text, embeddings))
        })
        .collect();

    // Batch insert to database
    let mut stmt = conn.prepare(
        "INSERT INTO documents (path, content, embedding) VALUES (?, ?, ?)"
    )?;

    for (path, content, embeddings) in results {
        for (i, emb) in embeddings.iter().enumerate() {
            stmt.execute(params![
                format!("{}#{}", path.display(), i),
                content,
                emb
            ])?;
        }
    }

    Ok(())
}
\`\`\`

### 3. Memory-Mapped Index

\`\`\`rust
// Use memory-mapped files for large indexes
use memmap2::Mmap;

struct MappedIndex {
    mmap: Mmap,
    header: IndexHeader,
}

impl MappedIndex {
    fn load(path: &Path) -> Self {
        let file = File::open(path).unwrap();
        let mmap = unsafe { Mmap::map(&file).unwrap() };
        let header = IndexHeader::from_bytes(&mmap[..64]);

        Self { mmap, header }
    }

    fn get_vector(&self, id: usize) -> &[f32] {
        let offset = 64 + id * self.header.dim * 4;
        let bytes = &self.mmap[offset..offset + self.header.dim * 4];

        unsafe {
            std::slice::from_raw_parts(
                bytes.as_ptr() as *const f32,
                self.header.dim
            )
        }
    }
}
\`\`\`

## Real-World Performance

### Indexing Speed

| File Count | Total Size | Index Time | Index Size |
|------------|-----------|------------|------------|
| 1,000 | 500MB | 45s | 50MB |
| 10,000 | 5GB | 7min | 450MB |
| 100,000 | 50GB | 65min | 4.2GB |

### Search Latency

| Index Size | Query Time (p50) | Query Time (p99) |
|------------|-----------------|-----------------|
| 1K docs | 8ms | 15ms |
| 10K docs | 25ms | 45ms |
| 100K docs | 48ms | 95ms |

### Memory Usage

| Index Size | RAM Usage | With mmap |
|------------|-----------|-----------|
| 1K docs | 80MB | 40MB |
| 10K docs | 400MB | 120MB |
| 100K docs | 3.5GB | 500MB |

## The User Experience

All this complexity is hidden behind a simple interface:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  🔍 Search your files...                                    │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ meeting notes about the product launch                  ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 Product Launch Planning.docx                    98%     │
│     "...discussed timeline for product launch..."           │
│                                                             │
│  📧 Re: Launch Date Confirmation.eml               94%     │
│     "...confirming the launch date for..."                  │
│                                                             │
│  📝 standup-2024-03-20.md                          89%     │
│     "...sprint planning for launch preparation..."          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

Users don't need to know about embeddings, HNSW, or vector databases. They just type what they're looking for and get results instantly.

## Conclusion

Building semantic search that's fast, private, and accurate required solving challenges at every layer:
- Efficient file watching and text extraction
- Local embedding generation with quantized models
- High-performance vector indexing with HNSW
- Smart chunking and re-ranking strategies

The result: search that understands meaning, runs entirely on your device, and returns results in under 100ms—even with 100,000+ files.

---

*Ready to organize your files? Try [Hippo](/products/hippo) free for up to 10K files.*
    `,
  },
  {
    id: 'signal-protocol-implementation',
    title: 'Implementing Signal Protocol: A Technical Guide',
    excerpt: 'How we integrated Signal Protocol into Chai.im for end-to-end encrypted messaging. Key exchange, double ratchet, and security considerations.',
    date: 'July 20, 2024',
    category: 'Security',
    readTime: '14 min read',
    author: 'GrepLabs Team',
    tags: ['Encryption', 'Security', 'Signal Protocol', 'Messaging'],
    content: `
End-to-end encryption is essential for private messaging. The Signal Protocol is the gold standard, used by Signal, WhatsApp, and now Chai.im. This article explains how we implemented it and the security guarantees it provides.

## Why Signal Protocol?

The Signal Protocol provides:
- **End-to-end encryption**: Only sender and recipient can read messages
- **Perfect forward secrecy**: Compromising one key doesn't reveal past messages
- **Future secrecy**: Compromising one key doesn't reveal future messages
- **Deniability**: Can't cryptographically prove someone sent a message

No other protocol offers this combination of properties.

## Protocol Overview

The Signal Protocol consists of three main components:

1. **X3DH (Extended Triple Diffie-Hellman)**: Initial key exchange
2. **Double Ratchet**: Ongoing message encryption
3. **Sesame**: Multi-device support

## Part 1: Key Generation

Each user generates several key pairs:

\`\`\`typescript
interface UserKeys {
  // Long-term identity key (never changes)
  identityKey: KeyPair;

  // Signed prekey (rotates periodically)
  signedPrekey: {
    keyPair: KeyPair;
    signature: Uint8Array;  // Signed by identity key
    timestamp: number;
  };

  // One-time prekeys (used once, then discarded)
  oneTimePrekeys: KeyPair[];
}

async function generateUserKeys(): Promise<UserKeys> {
  // Identity key - Curve25519
  const identityKey = await generateKeyPair();

  // Signed prekey - rotates every 30 days
  const signedPrekeyPair = await generateKeyPair();
  const signature = await sign(
    identityKey.privateKey,
    signedPrekeyPair.publicKey
  );

  // Generate 100 one-time prekeys
  const oneTimePrekeys = await Promise.all(
    Array(100).fill(0).map(() => generateKeyPair())
  );

  return {
    identityKey,
    signedPrekey: {
      keyPair: signedPrekeyPair,
      signature,
      timestamp: Date.now()
    },
    oneTimePrekeys
  };
}
\`\`\`

## Part 2: X3DH Key Exchange

When Alice wants to message Bob for the first time:

\`\`\`typescript
// Alice's side - initiating conversation
async function initiateSession(
  aliceIdentity: KeyPair,
  bobBundle: PreKeyBundle
): Promise<SessionState> {
  // Generate ephemeral key for this session
  const ephemeralKey = await generateKeyPair();

  // Verify Bob's signed prekey
  const validSignature = await verify(
    bobBundle.identityKey,
    bobBundle.signedPrekey.signature,
    bobBundle.signedPrekey.publicKey
  );

  if (!validSignature) {
    throw new Error('Invalid signed prekey signature');
  }

  // X3DH: Compute 3-4 DH values
  const dh1 = await dh(aliceIdentity.privateKey, bobBundle.signedPrekey.publicKey);
  const dh2 = await dh(ephemeralKey.privateKey, bobBundle.identityKey);
  const dh3 = await dh(ephemeralKey.privateKey, bobBundle.signedPrekey.publicKey);

  let dh4: Uint8Array | null = null;
  if (bobBundle.oneTimePrekey) {
    dh4 = await dh(ephemeralKey.privateKey, bobBundle.oneTimePrekey);
  }

  // Derive initial root key
  const inputKeyMaterial = concat(dh1, dh2, dh3, dh4 || new Uint8Array());
  const rootKey = await hkdf(inputKeyMaterial, 'X3DH');

  // Initialize double ratchet
  return initializeRatchet({
    rootKey,
    theirIdentityKey: bobBundle.identityKey,
    theirRatchetKey: bobBundle.signedPrekey.publicKey,
    ourEphemeralKey: ephemeralKey
  });
}
\`\`\`

Bob's side when receiving the first message:

\`\`\`typescript
async function receiveInitialMessage(
  bobIdentity: KeyPair,
  bobSignedPrekey: KeyPair,
  bobOneTimePrekey: KeyPair | null,
  message: InitialMessage
): Promise<SessionState> {
  // X3DH: Compute same DH values
  const dh1 = await dh(bobSignedPrekey.privateKey, message.identityKey);
  const dh2 = await dh(bobIdentity.privateKey, message.ephemeralKey);
  const dh3 = await dh(bobSignedPrekey.privateKey, message.ephemeralKey);

  let dh4: Uint8Array | null = null;
  if (bobOneTimePrekey) {
    dh4 = await dh(bobOneTimePrekey.privateKey, message.ephemeralKey);
    // Delete one-time prekey after use
    deleteOneTimePrekey(bobOneTimePrekey.publicKey);
  }

  // Derive same root key
  const inputKeyMaterial = concat(dh1, dh2, dh3, dh4 || new Uint8Array());
  const rootKey = await hkdf(inputKeyMaterial, 'X3DH');

  return initializeRatchet({
    rootKey,
    theirIdentityKey: message.identityKey,
    theirRatchetKey: message.ephemeralKey,
    ourSignedPrekey: bobSignedPrekey
  });
}
\`\`\`

## Part 3: Double Ratchet Algorithm

After X3DH establishes the initial keys, the Double Ratchet maintains forward and future secrecy:

\`\`\`typescript
interface RatchetState {
  // Root key - evolves with each DH ratchet step
  rootKey: Uint8Array;

  // Sending chain
  sendingChainKey: Uint8Array;
  sendingRatchetKey: KeyPair;
  sendingCounter: number;

  // Receiving chain
  receivingChainKey: Uint8Array;
  theirRatchetKey: Uint8Array;
  receivingCounter: number;

  // Skipped message keys (for out-of-order delivery)
  skippedKeys: Map<string, Uint8Array>;
}

class DoubleRatchet {
  private state: RatchetState;

  async encrypt(plaintext: Uint8Array): Promise<EncryptedMessage> {
    // Derive message key from chain key
    const { messageKey, nextChainKey } = await ratchetChainKey(
      this.state.sendingChainKey
    );

    this.state.sendingChainKey = nextChainKey;

    // Encrypt with AES-256-GCM
    const nonce = generateNonce();
    const ciphertext = await aesGcmEncrypt(messageKey, nonce, plaintext);

    const header: MessageHeader = {
      ratchetKey: this.state.sendingRatchetKey.publicKey,
      counter: this.state.sendingCounter,
      previousCounter: this.state.previousSendingCounter
    };

    this.state.sendingCounter++;

    return { header, nonce, ciphertext };
  }

  async decrypt(message: EncryptedMessage): Promise<Uint8Array> {
    // Check if we need to perform a DH ratchet step
    if (!arrayEquals(message.header.ratchetKey, this.state.theirRatchetKey)) {
      await this.dhRatchet(message.header.ratchetKey);
    }

    // Check for skipped messages
    const skippedKey = this.getSkippedKey(
      message.header.ratchetKey,
      message.header.counter
    );

    if (skippedKey) {
      return aesGcmDecrypt(skippedKey, message.nonce, message.ciphertext);
    }

    // Skip ahead if needed (save keys for later)
    while (this.state.receivingCounter < message.header.counter) {
      const { messageKey, nextChainKey } = await ratchetChainKey(
        this.state.receivingChainKey
      );

      this.saveSkippedKey(
        this.state.theirRatchetKey,
        this.state.receivingCounter,
        messageKey
      );

      this.state.receivingChainKey = nextChainKey;
      this.state.receivingCounter++;
    }

    // Derive message key
    const { messageKey, nextChainKey } = await ratchetChainKey(
      this.state.receivingChainKey
    );

    this.state.receivingChainKey = nextChainKey;
    this.state.receivingCounter++;

    // Decrypt
    return aesGcmDecrypt(messageKey, message.nonce, message.ciphertext);
  }

  private async dhRatchet(theirNewRatchetKey: Uint8Array) {
    // Save skipped keys from old chain
    // ... (implementation detail)

    // Update receiving chain
    this.state.theirRatchetKey = theirNewRatchetKey;
    const dhOutput = await dh(
      this.state.sendingRatchetKey.privateKey,
      theirNewRatchetKey
    );

    const { rootKey, chainKey } = await kdfRootKey(
      this.state.rootKey,
      dhOutput
    );

    this.state.rootKey = rootKey;
    this.state.receivingChainKey = chainKey;
    this.state.receivingCounter = 0;

    // Generate new sending ratchet key
    this.state.sendingRatchetKey = await generateKeyPair();

    const dhOutput2 = await dh(
      this.state.sendingRatchetKey.privateKey,
      theirNewRatchetKey
    );

    const { rootKey: newRootKey, chainKey: sendingChainKey } = await kdfRootKey(
      this.state.rootKey,
      dhOutput2
    );

    this.state.rootKey = newRootKey;
    this.state.sendingChainKey = sendingChainKey;
    this.state.sendingCounter = 0;
  }
}
\`\`\`

## Part 4: Key Derivation Functions

The protocol uses HKDF extensively:

\`\`\`typescript
async function hkdf(
  inputKeyMaterial: Uint8Array,
  info: string,
  length: number = 32
): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    inputKeyMaterial,
    { name: 'HKDF' },
    false,
    ['deriveBits']
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: 'HKDF',
      salt: new Uint8Array(32),
      info: new TextEncoder().encode(info),
      hash: 'SHA-256'
    },
    key,
    length * 8
  );

  return new Uint8Array(bits);
}

async function kdfRootKey(
  rootKey: Uint8Array,
  dhOutput: Uint8Array
): Promise<{ rootKey: Uint8Array; chainKey: Uint8Array }> {
  const derived = await hkdf(
    concat(rootKey, dhOutput),
    'RootKeyDerivation',
    64
  );

  return {
    rootKey: derived.slice(0, 32),
    chainKey: derived.slice(32)
  };
}

async function ratchetChainKey(
  chainKey: Uint8Array
): Promise<{ messageKey: Uint8Array; nextChainKey: Uint8Array }> {
  const messageKey = await hmac(chainKey, new Uint8Array([0x01]));
  const nextChainKey = await hmac(chainKey, new Uint8Array([0x02]));

  return { messageKey, nextChainKey };
}
\`\`\`

## Part 5: Message Format

Our wire format for encrypted messages:

\`\`\`typescript
interface EncryptedMessage {
  // Protocol version
  version: number;  // Currently 3

  // Header (not encrypted, but authenticated)
  header: {
    // Sender's current ratchet public key
    ratchetKey: Uint8Array;  // 32 bytes

    // Message counters
    counter: number;
    previousCounter: number;
  };

  // Nonce for AES-GCM
  nonce: Uint8Array;  // 12 bytes

  // Ciphertext (includes GCM auth tag)
  ciphertext: Uint8Array;
}

// Serialization
function serializeMessage(msg: EncryptedMessage): Uint8Array {
  const buffer = new ArrayBuffer(
    1 +      // version
    32 +     // ratchet key
    4 +      // counter
    4 +      // previous counter
    12 +     // nonce
    msg.ciphertext.length
  );

  const view = new DataView(buffer);
  let offset = 0;

  view.setUint8(offset++, msg.version);
  new Uint8Array(buffer, offset, 32).set(msg.header.ratchetKey);
  offset += 32;
  view.setUint32(offset, msg.header.counter, false);
  offset += 4;
  view.setUint32(offset, msg.header.previousCounter, false);
  offset += 4;
  new Uint8Array(buffer, offset, 12).set(msg.nonce);
  offset += 12;
  new Uint8Array(buffer, offset).set(msg.ciphertext);

  return new Uint8Array(buffer);
}
\`\`\`

## Security Considerations

### Key Storage

Private keys must be protected:

\`\`\`typescript
// Use platform-specific secure storage
class SecureKeyStore {
  async store(keyId: string, key: Uint8Array): Promise<void> {
    if (typeof window !== 'undefined') {
      // Browser: Use IndexedDB with origin-bound encryption
      await this.browserStore(keyId, key);
    } else if (process.platform === 'darwin') {
      // macOS: Use Keychain
      await this.keychainStore(keyId, key);
    } else if (process.platform === 'win32') {
      // Windows: Use DPAPI
      await this.dpapiStore(keyId, key);
    } else {
      // Linux: Use secret-service or encrypted file
      await this.secretServiceStore(keyId, key);
    }
  }

  async retrieve(keyId: string): Promise<Uint8Array | null> {
    // Platform-specific retrieval
  }
}
\`\`\`

### Session State Persistence

Sessions must survive app restarts:

\`\`\`typescript
interface PersistedSession {
  recipientId: string;
  state: RatchetState;
  createdAt: number;
  lastUsed: number;
}

class SessionStore {
  private db: IDBDatabase;

  async saveSession(session: PersistedSession): Promise<void> {
    // Encrypt session state before storage
    const encrypted = await this.encryptState(session.state);

    const tx = this.db.transaction('sessions', 'readwrite');
    await tx.objectStore('sessions').put({
      recipientId: session.recipientId,
      encryptedState: encrypted,
      createdAt: session.createdAt,
      lastUsed: Date.now()
    });
  }
}
\`\`\`

### Handling Compromised Keys

If a device is compromised:

\`\`\`typescript
async function rotateIdentityKey(userId: string): Promise<void> {
  // 1. Generate new identity key
  const newIdentity = await generateKeyPair();

  // 2. Sign new identity with old identity (if available)
  // This creates a verifiable key rotation chain

  // 3. Upload new prekey bundle
  await uploadPreKeyBundle(userId, newIdentity);

  // 4. Notify contacts of key change
  // They'll see "Security code changed" notification

  // 5. Establish new sessions with all contacts
  await resetAllSessions(userId);
}
\`\`\`

### Safety Numbers

Users can verify they're talking to the right person:

\`\`\`typescript
function generateSafetyNumber(
  ourIdentityKey: Uint8Array,
  theirIdentityKey: Uint8Array
): string {
  // Concatenate keys in consistent order
  const combined = ourIdentityKey < theirIdentityKey
    ? concat(ourIdentityKey, theirIdentityKey)
    : concat(theirIdentityKey, ourIdentityKey);

  // Hash and format as numbers
  const hash = sha512(combined);

  // Convert to 60-digit number (5 groups of 12)
  let result = '';
  for (let i = 0; i < 30; i += 6) {
    const num = (hash[i] << 40) | (hash[i+1] << 32) |
                (hash[i+2] << 24) | (hash[i+3] << 16) |
                (hash[i+4] << 8) | hash[i+5];
    result += num.toString().padStart(12, '0') + ' ';
  }

  return result.trim();
}
\`\`\`

## Testing

Encryption implementations require thorough testing:

\`\`\`typescript
describe('Signal Protocol', () => {
  it('should establish session via X3DH', async () => {
    const alice = await generateUserKeys();
    const bob = await generateUserKeys();

    // Alice initiates
    const aliceSession = await initiateSession(
      alice.identityKey,
      bob.getPreKeyBundle()
    );

    // Alice sends first message
    const encrypted = await aliceSession.encrypt(
      new TextEncoder().encode('Hello Bob!')
    );

    // Bob receives and establishes session
    const bobSession = await receiveInitialMessage(
      bob.identityKey,
      bob.signedPrekey.keyPair,
      bob.oneTimePrekeys[0],
      encrypted
    );

    const decrypted = await bobSession.decrypt(encrypted);
    expect(new TextDecoder().decode(decrypted)).toBe('Hello Bob!');
  });

  it('should maintain forward secrecy', async () => {
    // ... test that compromising current key doesn't reveal past messages
  });

  it('should handle out-of-order messages', async () => {
    // ... test message reordering
  });
});
\`\`\`

## Conclusion

Implementing Signal Protocol correctly is challenging but essential for truly private messaging. The protocol provides strong security guarantees through careful cryptographic design.

Key takeaways:
- X3DH establishes initial shared secret asynchronously
- Double Ratchet provides forward and future secrecy
- Every message uses a unique encryption key
- Proper key storage is as important as the protocol itself

---

*Experience Signal Protocol encryption with [Chai.im](/products/chai).*
    `,
  },
  {
    id: 'usage-based-pricing',
    title: 'Why We Chose Usage-Based Pricing',
    excerpt: 'Moving from subscriptions to pay-for-what-you-use. How usage-based pricing aligns incentives and makes premium features accessible.',
    date: 'June 15, 2024',
    category: 'Business',
    readTime: '7 min read',
    author: 'GrepLabs Team',
    tags: ['Pricing', 'Business Model', 'SaaS', 'Strategy'],
    content: `
Traditional SaaS pricing is broken. You pay the same whether you use a product once a month or every day. We're changing that with usage-based pricing across all GrepLabs products.

## The Problem with Flat Subscriptions

Consider a typical SaaS tool at $10/month:
- Heavy user (daily): Pays $10, gets great value
- Light user (weekly): Pays $10, questionable value
- Occasional user (monthly): Pays $10, poor value

The occasional user subsidizes the heavy user. This feels unfair and leads to churn.

## Usage-Based Pricing: A Better Model

With usage-based pricing:
- Pay only for what you use
- Start free, scale naturally
- No commitment required
- Costs align with value received

## How It Works at GrepLabs

### Shields AI

**Free Tier:**
- 100,000 DNS queries/month
- 5 devices
- Basic blocklists

**Usage Pricing:**
- $0.01 per 1,000 queries over free tier
- Capped at $4.99/month (unlimited at that point)

**Example:**
- Light user: 50K queries → $0 (free tier)
- Medium user: 200K queries → $1.00
- Heavy user: 1M+ queries → $4.99 (cap)

### Hippo

**Free Tier:**
- 10,000 files indexed
- Basic search
- Local storage only

**Usage Pricing:**
- $0.001 per file over free tier
- $0.10 per GB of cloud sync
- Capped at $19.99/month

**Example:**
- Casual user: 5K files, no sync → $0
- Power user: 50K files, 10GB sync → $5.00
- Team: 100K files, 50GB sync → $14.00

### Chai.im

**Free Tier:**
- Unlimited 1-on-1 messages
- Groups up to 10 members
- Basic features

**Usage Pricing:**
- $0.50 per large group (11-100 members)
- $2.00 per large group (100+ members)
- $5.00 per enterprise feature (SSO, audit logs)

**Example:**
- Personal use: Small groups → $0
- Team: 3 large groups → $1.50
- Enterprise: SSO + audit → $10.00

### GrepCoin

**Free:**
- All games playable
- Basic rewards
- Community features

**Optional:**
- Battle Pass: $9.99/month
- Tournament entry: Variable
- NFT fees: 2.5% on trades

## Why This Works Better

### For Users

1. **Lower barrier to entry**: Free tier is genuinely useful
2. **Fair pricing**: Pay proportional to value received
3. **Predictable scaling**: Know costs will grow with usage
4. **No commitment**: Cancel anytime, no sunken costs

### For GrepLabs

1. **Aligned incentives**: We succeed when you use our products
2. **Natural expansion**: Users grow into paid tiers
3. **Reduced churn**: Light users stay on free tier instead of canceling
4. **Market signal**: Usage data shows what features matter

## Implementing Usage Tracking

We track usage transparently:

\`\`\`typescript
// Example: Shields AI query tracking
interface UsageMetrics {
  userId: string;
  period: string;  // "2024-01"
  queries: number;
  blockedQueries: number;
  devices: number;
}

// User dashboard shows real-time usage
function UsageDashboard({ metrics }: { metrics: UsageMetrics }) {
  const freeQueries = 100_000;
  const overage = Math.max(0, metrics.queries - freeQueries);
  const cost = Math.min(overage * 0.00001, 4.99);

  return (
    <div>
      <h3>This Month's Usage</h3>
      <p>Queries: {metrics.queries.toLocaleString()}</p>
      <p>Free tier: {freeQueries.toLocaleString()}</p>
      <p>Overage: {overage.toLocaleString()}</p>
      <p>Current cost: \${cost.toFixed(2)}</p>
      {cost >= 4.99 && <p>You've hit the cap - unlimited for $4.99!</p>}
    </div>
  );
}
\`\`\`

## Handling Edge Cases

### Billing Surprises

We prevent unexpected bills:
- Real-time usage dashboards
- Email alerts at 50%, 80%, 100% of expected usage
- Hard caps that can't be exceeded
- Grace periods for overages

### Enterprise Needs

For predictable budgeting:
- Annual commitments with discounts
- Committed use pricing
- Custom caps and terms

### Seasonal Variation

Usage varies by month:
- No penalty for low months
- Unused free tier doesn't roll over (keeps pricing simple)
- Annual plans average out variation

## The Numbers

Since implementing usage-based pricing:
- **Free tier retention**: 85% (vs 60% with trials)
- **Conversion to paid**: 15% (vs 5% with flat pricing)
- **Net revenue retention**: 120% (users grow over time)
- **Customer satisfaction**: 4.8/5 on pricing fairness

## Common Concerns

### "What if I get a huge bill?"

Hard caps prevent this. Shields AI maxes at $4.99/month no matter what. We'd rather cap revenue than surprise users.

### "How do I budget for this?"

We provide:
- Historical usage trends
- Projected costs based on growth
- Annual plans with fixed pricing

### "Isn't tracking usage creepy?"

We track aggregate counts, not content:
- "You made 150K queries" not "You visited these domains"
- Full transparency in what we track
- Privacy-preserving analytics

## Conclusion

Usage-based pricing aligns incentives between users and providers. You pay for value received, we're incentivized to make products you actually use. It's fairer for everyone.

---

*Check out our detailed pricing at [/monetization](/monetization) or try our products free to see usage-based pricing in action.*
    `,
  },
  {
    id: 'rust-for-performance',
    title: 'Why We Build in Rust',
    excerpt: 'Memory safety without garbage collection. Performance without compromise. How Rust enables the speed and reliability our products demand.',
    date: 'May 10, 2024',
    category: 'Engineering',
    readTime: '9 min read',
    author: 'GrepLabs Team',
    tags: ['Rust', 'Performance', 'Engineering', 'Systems Programming'],
    content: `
At GrepLabs, we build performance-critical software: DNS servers handling millions of queries, file indexers processing hundreds of thousands of documents, and encryption engines protecting sensitive data. We chose Rust for these systems, and it's been transformative.

## Why Not [Insert Language]?

### Why Not Go?

Go is excellent for many use cases, but:
- Garbage collection causes latency spikes (unacceptable for <1ms DNS)
- Less control over memory layout
- Goroutine overhead for fine-grained parallelism

### Why Not C/C++?

C++ provides the performance we need, but:
- Memory safety issues are too easy to introduce
- Security vulnerabilities from buffer overflows, use-after-free
- Harder to maintain and audit

### Why Not Python/Node.js?

Great for prototyping, but:
- 10-100x slower for CPU-intensive work
- High memory overhead
- GIL (Python) limits parallelism

## Rust's Advantages

### Memory Safety Without GC

Rust's ownership system prevents entire classes of bugs at compile time:

\`\`\`rust
// This won't compile - Rust prevents use-after-free
fn bad_code() {
    let data = vec![1, 2, 3];
    let reference = &data[0];
    drop(data);  // Compiler error: data still borrowed
    println!("{}", reference);
}

// This is safe - Rust ensures validity
fn good_code() {
    let data = vec![1, 2, 3];
    let reference = &data[0];
    println!("{}", reference);
    drop(data);  // OK: reference no longer used
}
\`\`\`

### Zero-Cost Abstractions

High-level code compiles to efficient machine code:

\`\`\`rust
// This iterator chain...
let sum: i32 = numbers
    .iter()
    .filter(|&x| x % 2 == 0)
    .map(|x| x * 2)
    .sum();

// ...compiles to the same assembly as this loop:
let mut sum = 0;
for x in numbers {
    if x % 2 == 0 {
        sum += x * 2;
    }
}
\`\`\`

### Fearless Concurrency

The type system prevents data races:

\`\`\`rust
use std::sync::{Arc, Mutex};
use std::thread;

// Shared state is explicitly marked
let counter = Arc::new(Mutex::new(0));
let mut handles = vec![];

for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    }));
}

for handle in handles {
    handle.join().unwrap();
}
// Counter is guaranteed to be 10
\`\`\`

## Real-World Impact

### Shields AI: DNS Performance

Our DNS server handles 100K+ queries per second:

\`\`\`rust
// Hot path: DNS query processing
#[inline(always)]
fn process_query(packet: &[u8], blocklist: &HashSet<&str>) -> QueryResult {
    // Parse DNS packet (zero-copy)
    let query = DnsQuery::parse(packet)?;

    // Check blocklist (O(1) lookup)
    if blocklist.contains(query.domain()) {
        return QueryResult::Blocked;
    }

    QueryResult::Forward
}
\`\`\`

**Results:**
- P99 latency: <500μs
- Memory: <100MB for 5M blocked domains
- Zero garbage collection pauses

### Hippo: File Indexing

Processing 100K files requires efficiency:

\`\`\`rust
// Parallel file processing
use rayon::prelude::*;

fn index_directory(path: &Path) -> Vec<Document> {
    // Parallel directory traversal
    WalkDir::new(path)
        .into_iter()
        .par_bridge()  // Parallelize
        .filter_map(|entry| entry.ok())
        .filter(|e| e.file_type().is_file())
        .map(|entry| {
            let content = std::fs::read_to_string(entry.path())?;
            let embedding = model.embed(&content);
            Ok(Document { path: entry.path(), embedding })
        })
        .collect()
}
\`\`\`

**Results:**
- Index 1000 files/minute
- Memory scales linearly
- Full CPU utilization

### Chai.im: Encryption Engine

Cryptographic operations must be timing-safe:

\`\`\`rust
// Constant-time comparison (prevents timing attacks)
use subtle::ConstantTimeEq;

fn verify_mac(expected: &[u8], actual: &[u8]) -> bool {
    expected.ct_eq(actual).into()
}

// AEAD encryption with explicit memory management
fn encrypt(key: &[u8; 32], nonce: &[u8; 12], plaintext: &[u8]) -> Vec<u8> {
    let cipher = Aes256Gcm::new(key.into());

    // Plaintext is never copied unnecessarily
    cipher.encrypt(nonce.into(), plaintext).expect("encryption failure")
}
\`\`\`

**Results:**
- Constant-time operations prevent side-channel attacks
- No plaintext ever leaks to heap
- Memory zeroed after use

## Developer Experience

### Error Handling

Rust's \`Result\` type makes errors explicit:

\`\`\`rust
// Errors are part of the type signature
fn read_config(path: &Path) -> Result<Config, ConfigError> {
    let content = std::fs::read_to_string(path)
        .map_err(|e| ConfigError::IoError(e))?;

    let config: Config = toml::from_str(&content)
        .map_err(|e| ConfigError::ParseError(e))?;

    config.validate()?;

    Ok(config)
}

// Callers must handle errors
match read_config(&path) {
    Ok(config) => start_server(config),
    Err(e) => {
        eprintln!("Failed to load config: {}", e);
        std::process::exit(1);
    }
}
\`\`\`

### Testing

Property-based testing catches edge cases:

\`\`\`rust
use proptest::prelude::*;

proptest! {
    #[test]
    fn encrypt_decrypt_roundtrip(plaintext: Vec<u8>) {
        let key = generate_key();
        let nonce = generate_nonce();

        let ciphertext = encrypt(&key, &nonce, &plaintext);
        let decrypted = decrypt(&key, &nonce, &ciphertext).unwrap();

        prop_assert_eq!(plaintext, decrypted);
    }
}
\`\`\`

### Documentation

Documentation is first-class:

\`\`\`rust
/// Processes a DNS query and returns the appropriate response.
///
/// # Arguments
///
/// * \`query\` - The incoming DNS query packet
/// * \`config\` - Server configuration including blocklists
///
/// # Returns
///
/// A \`DnsResponse\` that should be sent back to the client.
///
/// # Example
///
/// \`\`\`
/// let response = process_query(&query_packet, &config);
/// socket.send_to(&response.to_bytes(), client_addr)?;
/// \`\`\`
pub fn process_query(query: &DnsQuery, config: &Config) -> DnsResponse {
    // Implementation
}
\`\`\`

## Challenges

### Learning Curve

Rust's ownership system takes time to learn:
- "Fighting the borrow checker" is real initially
- Concepts like lifetimes are unfamiliar
- Design patterns differ from other languages

Our approach:
- Gradual introduction for new team members
- Code review focused on idiomatic Rust
- Internal documentation of common patterns

### Compilation Time

Large Rust projects compile slowly:
- Full rebuild: 2-3 minutes
- Incremental: 10-30 seconds

Mitigations:
- Split into smaller crates
- Use \`cargo check\` during development
- CI caches dependencies

### Ecosystem Maturity

Some libraries are young:
- Fewer options than Python/JS
- Some crates abandoned
- API stability varies

We evaluate carefully:
- Maintenance activity
- Test coverage
- Security audit status

## Conclusion

Rust enables us to build software that's simultaneously fast, safe, and maintainable. The initial learning investment pays dividends in:
- Fewer production bugs
- Better performance
- More confident refactoring
- Easier security audits

For performance-critical, security-sensitive software, Rust is the right choice.

---

*Interested in our Rust code? Check out our [open source repositories](https://github.com/greplabs).*
    `,
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))]
}

export function getTags(): string[] {
  return [...new Set(blogPosts.flatMap(post => post.tags))]
}
